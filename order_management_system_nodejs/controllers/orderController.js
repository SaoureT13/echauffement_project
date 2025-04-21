const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
const db = require("../db");

exports.updateOrderStatus = async (req, res) => {
    const orderId = req.params.id;

    try {
        const order = await prisma.order.findUnique({
            where: {
                id: Number(orderId),
            },
        });

        if (!order) {
            return res.status(404).json({
                code: 404,
                description: "Order not found",
            });
        }

        const updatedOrder = await prisma.order.update({
            where: { id: Number(orderId) },
            data: {
                status: order.status == "pending" ? "completed" : "pending",
            },
        });

        return res.status(200).json({
            code: 200,
            description: "Order successfully updated",
            data: updatedOrder,
        });
    } catch (error) {
        return res.status(400).json({
            code: 400,
            description: error.message,
        });
    }
};

exports.getAllOrder = async (req, res) => {
    const status = req.query.status || undefined;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    let result = null;
    try {
        result = await db.query(
            `
            SELECT o.*, c.name, c.phone, c.email
            FROM orders o
            INNER JOIN customers c ON c.id = o.customer_id
            WHERE ($1::text IS NULL OR o.status = $1)
            ORDER BY o.created_at DESC
            LIMIT $2 OFFSET $3
            `,
            [status || null, limit, offset]
        );

        const orders = result.rows;

        result = await db.query(
            `
            SELECT *
            FROM order_details
            WHERE order_id = ANY($1)
            `,
            [orders.map((order) => order.id)]
        );

        const order_details = result.rows;

        result = await db.query(
            `SELECT *
            FROM products
            WHERE id = ANY($1)`,
            [[...new Set(order_details.map((details) => details.product_id))]]
        );

        const products = result.rows;

        const formattedOrders = orders.map((order) => {
            return {
                id: order.id,
                status: order.status,
                created_at: order.created_at,
                updated_at: order.updated_at,
                customer: {
                    id: order.customer_id,
                    name: order.name,
                    phone: order.phone,
                    email: order.email,
                },
                products: order_details
                    .filter((detail) => detail.order_id === order.id)
                    .map((detail) => {
                        const product = products.find(
                            (p) => p.id === detail.product_id
                        );
                        return {
                            order_details_id: detail.id,
                            id: product.id,
                            name: product.name,
                            quantity: detail.quantity,
                            unit_price: detail.unit_price,
                            image: product.image,
                        };
                    }),
            };
        });

        result = await db.query(
            `
            SELECT COUNT(*) 
            FROM orders 
            WHERE ($1::text IS NULL OR status = $1)
            `,
            [status ? status : null]
        );

        const total = Number(result.rows[0].count);

        return res.status(200).json({
            code: 200,
            description: "Orders founded",
            data: {
                orders: formattedOrders,
                page: {
                    currentPage: page,
                    limit: limit,
                    total: total,
                    totalPages: Math.ceil(total / limit),
                },
            },
        });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            description: error.message,
        });
    }
};

exports.updateProductsOnOrder = async (req, res) => {
    const { product_items, status } = req.body;

    try {
        const orderId = req.params.id;

        // 1. Vérifie que la commande existe
        const order = await db.query(`SELECT * FROM orders WHERE id = $1`, [
            orderId,
        ]);
        if (order.rows.length === 0) {
            return res.status(404).json({
                code: 404,
                description: "Order not found",
            });
        }

        if (
            status &&
            status !== order.rows[0].status &&
            (status === "pending" || status === "completed")
        ) {
            await db.query(`UPDATE orders SET status = $1 WHERE id = $2`, [
                status,
                orderId,
            ]);
        }

        // 2. Récupère les produits existants liés à cette commande
        const productsOnOrderRes = await db.query(
            `
            SELECT ARRAY_AGG(o_d.id::INT) AS product_ids
            FROM order_details o_d
            INNER JOIN orders o ON o.id = o_d.order_id
            WHERE o.id = $1
            GROUP BY o.id
            `,
            [orderId]
        );

        let existingProductIds = productsOnOrderRes.rows[0]?.product_ids;

        // 3. Récupère les nouveaux IDs à jour
        const incomingProductIds = product_items.map((item) => Number(item.id));
        // 4. Détermine les produits à supprimer (dans DB mais plus dans body)
        const toBeDeleted = getLeftDifference(
            existingProductIds,
            incomingProductIds
        );

        // 5. Détermine les produits à mettre à jour (en commun)
        const toBeUpdated = getCommonElements(
            existingProductIds,
            incomingProductIds
        );
        // 6. Supprime ceux à supprimer
        if (toBeDeleted.length > 0) {
            await db.query(
                `DELETE FROM order_details WHERE id = ANY($1::int[])`,
                [toBeDeleted]
            );
        }

        // 7. Met à jour les quantités des produits en commun
        for (const productId of toBeUpdated) {
            const product = product_items.find(
                (item) => Number(item.id) === Number(productId)
            );
            if (product) {
                await db.query(
                    `UPDATE order_details SET quantity = $1 WHERE id = $2`,
                    [product.quantity, productId]
                );
            }
        }

        return res.status(200).json({
            code: 200,
            description: "Order successfully updated",
        });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            error: error.message,
        });
    }
};

exports.addOrDeleteProductsOnOrder = async (req, res) => {
    const { productIds, method } = req.body;
    const { id: orderId, customerId } = req.params;
    try {
        const order = await db.query(`SELECT * FROM orders WHERE id = $1`, [
            orderId,
        ]);

        if (order.rows.length === 0) {
            return res.status(404).json({
                code: 404,
                description: "Order not found",
            });
        }

        const productsOnOrderRes = await db.query(
            `
            SELECT ARRAY_AGG(o_d.product_id::int) AS product_ids
            FROM order_details o_d
            INNER JOIN orders o ON o.id = o_d.order_id
            WHERE o.customer_id = $1
            `,
            [customerId]
        );

        let existingProductIds = productsOnOrderRes.rows[0]?.product_ids;

        const incomingProductIds = [...new Set(productIds)].map((item) =>
            Number(item)
        );

        const toBeDeleted = getLeftDifference(
            existingProductIds ? existingProductIds : [],
            incomingProductIds
        );

        const toBeAdded = getRightDifference(
            existingProductIds ? existingProductIds : [],
            incomingProductIds
        );

        console.log(toBeDeleted);
        console.log(toBeAdded);

        if (toBeDeleted.length > 0) {
            await db.query(
                `DELETE FROM order_details WHERE order_id = $1 AND product_id = ANY($2::INT[])`,
                [orderId, toBeDeleted]
            );
        }

        if (toBeAdded.length > 0) {
            for (const productId of toBeAdded) {
                const product = await db.query(
                    `SELECT *
                    FROM products
                    WHERE id = $1`,
                    [productId]
                );
                if (product.rows.length > 0) {
                    await db.query(
                        `INSERT INTO order_details(product_id, order_id, quantity, unit_price)
                    VALUES ($1, $2, $3, $4)`,
                        [productId, orderId, 1, product.rows[0].price]
                    );
                }
            }
        }
        if (method && method == "ajax") {
            return res.status(200).json({
                code: 200,
                description: "Order successfully updated",
            });
        }
        return res.redirect("http://localhost:5173/orders");
    } catch (error) {
        return res.status(500).json({
            code: 500,
            error: error.message,
        });
    }
};

function getRightDifference(leftArray, rightArray) {
    return rightArray.filter((x) => !leftArray.includes(x));
}
function getCommonElements(leftArray, rightArray) {
    return [...new Set(leftArray.filter((x) => rightArray.includes(x)))];
}

function getLeftDifference(leftArray, rightArray) {
    return leftArray.filter((x) => !rightArray.includes(x));
}
