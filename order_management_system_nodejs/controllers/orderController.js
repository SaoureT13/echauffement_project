const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
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
    const skip = (page - 1) * limit;
    try {
        const orders = await prisma.order.findMany({
            where: {
                status: status,
            },
            include: {
                orderDetails: {
                    include: {
                        product: true,
                    },
                },
                customer: true,
            },
            skip: skip,
            take: limit,
        });

        const total = await prisma.order.count({
            where: {
                status: status,
            },
        });

        const formattedOrders = orders.map((order) => ({
            id: order.id,
            registrationDate: order.registrationDate,
            status: order.status,
            createdAt: order.createdAt,
            updatedAt: order.updatedAt,
            customer: {
                id: order.customer.id,
                name: order.customer.name,
            },
            products: order.orderDetails.map((detail) => ({
                order_details_id: detail.id,
                product_id: detail.product.id,
                name: detail.product.name,
                quantity: detail.quantity,
                unit_price: detail.unitPrice,
            })),
        }));

        return res.status(200).json({
            code: 200,
            description: "Orders founded",
            data: {
                orders: formattedOrders,
                page: {
                    current_page: page,
                    limit: limit,
                    total: total,
                    totalPages: Math.ceil(total / limit),
                },
            },
        });
    } catch (error) {
        return res.status(400).json({
            code: 400,
            description: error.message,
        });
    }
};

exports.updateProductsOnOrder = async (req, res) => {
    const { product_items } = req.body;

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

        let pgArrayRaw = productsOnOrderRes.rows[0]?.product_ids;

        // let existingProductIds = pgArrayRaw
        let existingProductIds = Array.isArray(pgArrayRaw)
            ? pgArrayRaw
            : pgArrayRaw
            ? pgArrayRaw.replace(/[{}]/g, "").split(",").map(Number)
            : [];

        // 3. Récupère les nouveaux IDs à jour
        const incomingProductIds = product_items.map((item) => item.id);

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
            const product = product_items.find((item) => item.id === productId);
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

function getRightDifference(leftArray, rightArray) {
    return rightArray.filter((x) => !leftArray.includes(x));
}
function getCommonElements(leftArray, rightArray) {
    return [...new Set(leftArray.filter((x) => rightArray.includes(x)))];
}

function getLeftDifference(leftArray, rightArray) {
    return leftArray.filter((x) => !rightArray.includes(x));
}
