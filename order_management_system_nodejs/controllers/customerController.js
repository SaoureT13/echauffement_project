const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
});
const db = require("../db");

exports.updateCustomer = async (req, res) => {
    const customerId = req.params.id;
    const { name, address, email, phone, method } = req.body;

    let result = null;
    try {
        result = await db.query("SELECT * FROM customers WHERE id = $1", [
            Number(customerId),
        ]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                code: 404,
                description: "Customer not found",
            });
        }

        await db.query(
            `
            UPDATE customers
            SET 
                name = $1,
                address = $2,
                email = $3,
                phone = $4
            WHERE id = $5
            `,
            [
                name ? name : result.rows[0].name,
                address ? address : result.rows[0].address,
                email ? email : result.rows[0].email,
                phone ? phone : result.rows[0].phone,
                result.rows[0].id,
            ]
        );

        result = await db.query("SELECT * FROM customers WHERE id = $1", [
            Number(customerId),
        ]);

        if (method && method == "ajax") {
            return res.status(200).json({
                code: 200,
                description: "Customer successfully updated",
                data: result.rows[0],
            });
        }

        return res.redirect("http://localhost:5173/customers");
    } catch (error) {
        res.status(500).json({ code: 500, description: error.message });
    }
};

exports.getAllCustomers = async (req, res) => {
    const { name } = req.query;
    const limit = Number(req.query.limit) || 20;
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * limit;
    let result = null;
    try {
        result = await db.query(
            `
            SELECT c.*, COUNT(o.id) AS orders_count
            FROM customers c 
            LEFT JOIN orders o ON o.customer_id = c.id 
            WHERE 
                ($1::text IS NULL OR c.name ILIKE $1)
            GROUP BY c.id
            LIMIT $2 OFFSET $3
            `,
            [name ? `%${name}%` : null, limit, offset]
        );
        const customers = result.rows;

        result = await db.query(
            `
            SELECT COUNT(*) as count
            FROM customers c 
            LEFT JOIN orders o ON o.customer_id = c.id 
            WHERE 
                ($1::text IS NULL OR name ILIKE $1)
            `,
            [name ? `%${name}%` : null]
        );
        const total = result.rows[0].count;

        res.status(200).json({
            code: 200,
            description: "Customers founded",
            data: {
                customers: customers,
                page: {
                    currentPage: page,
                    limit: limit,
                    total: Number(total),
                    totalPages: Math.ceil(Number(total) / limit),
                },
            },
        });
    } catch (error) {
        res.status(400).json({ code: 400, description: error.message });
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
            return res
                .status(404)
                .json({ code: 404, description: "Customer not found" });
        }

        //Recuperer les commandes du clients
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

        res.status(200).json({
            code: 200,
            description: "Orders founded",
            data: orders.rows,
        });
    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};
