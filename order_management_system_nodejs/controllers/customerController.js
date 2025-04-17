const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
});
const db = require("../db");

exports.updateCustomer = async (req, res) => {
    const customerId = req.params.id;
    const { name, address, email } = req.body;
    try {
        const customer = await prisma.customer.findUnique({
            where: {
                id: Number(customerId),
            },
        });

        if (!customer) {
            return res.status(404).json({
                code: 404,
                description: "Customer not found",
            });
        }

        const customerUpdated = await prisma.customer.update({
            where: { id: Number(customerId) },
            data: {
                name: name !== undefined ? name : customer.name,
                address: address !== undefined ? address : customer.address,
                email: email !== undefined ? email : customer.email,
            },
        });

        return res.status(200).json({
            code: 200,
            description: "Customer successfully updated",
            data: customerUpdated,
        });
    } catch (error) {
        res.status(400).json({ code: 400, description: error.message });
    }
};

exports.getAllCustomers = async (req, res) => {
    try {
        // const result = await db.query("SELECT * FROM customers");
        const customers = await prisma.customer.findMany({
            include: {
                orders: true,
            },
        });

        const formattedCustomers = customers.map((customer) => ({
            id: customer.id,
            name: customer.name,
            email: customer.email,
            address: customer.address,
            registrationDate: customer.registrationDate,
            createdAt: customer.createdAt,
            updatedAt: customer.updatedAt,
            orders_count: customer.orders.length,
        }));
        res.status(200).json({
            code: 200,
            description: "Customers founded",
            data: formattedCustomers,
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
