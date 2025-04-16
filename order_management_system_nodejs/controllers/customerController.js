const db = require("../db");

exports.getAllCustomers = async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM customers");
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Erreur" });
    }
};

exports.getOrdersByCustomer = async (req, res) => {
    // Recuperer les elements dans le body
    const customerId = req.params.id;

    try {
        const customer = await db.query(
            "SELECT * FROM customers WHERE id = $1",
            [customerId]
        );
        if (customer.rows.length === 0) {
            return res.status(404).json({ error: "Customer not found" });
        }
        const orders = await db.query(
            `
            SELECT o.*, SUM(o_d.quantity) AS total_quantity
            FROM order_details o_d
            INNER JOIN orders o ON o.id = o_d.order_id
            WHERE o.customer_id = $1
            GROUP BY o.id
            `,
            [customerId]
        );

        res.status(200).json(orders.rows);
    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};
