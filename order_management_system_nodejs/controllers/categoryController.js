const db = require("../db");

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await db.query(`
            SELECT c.*, COUNT(p.id) as total_product
            FROM categories c
            LEFT JOIN products p ON p.category_id = c.id
            GROUP BY c.id
            `);

        res.status(200).json({
            code: 200,
            description: "Categories founded",
            data: categories.rows,
        });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            description: error.message,
        });
    }
};
