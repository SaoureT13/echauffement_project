const db = require("../db");

exports.updateProductsOnOrder = async (req, res) => {
    const { product_items } = req.body;

    try {
        const orderId = req.params.id;

        // 1. Vérifie que la commande existe
        const order = await db.query(`SELECT * FROM orders WHERE id = $1`, [orderId]);
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
              ? pgArrayRaw.replace(/[{}]/g, '').split(',').map(Number)
              : [];

        // 3. Récupère les nouveaux IDs à jour
        const incomingProductIds = product_items.map(item => item.id);

        // 4. Détermine les produits à supprimer (dans DB mais plus dans body)
        const toBeDeleted = getLeftDifference(existingProductIds, incomingProductIds);

        // 5. Détermine les produits à mettre à jour (en commun)
        const toBeUpdated = getCommonElements(existingProductIds, incomingProductIds);

        // 6. Supprime ceux à supprimer
        if (toBeDeleted.length > 0) {
            await db.query(
                `DELETE FROM order_details WHERE id = ANY($1::int[])`,
                [toBeDeleted]
            );
        }

        // 7. Met à jour les quantités des produits en commun
        for (const productId of toBeUpdated) {
            const product = product_items.find(item => item.id === productId);
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
        console.error("❌ Error updating order:", error.message);
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
