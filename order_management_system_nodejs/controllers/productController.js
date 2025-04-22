const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
});
const db = require("../db");

exports.getAllProducts = async (req, res) => {
    try {
        const { stockMax, stockMin, priceMax, priceMin, name, categoryIds } =
            req.query;
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const offset = (page - 1) * limit;

        const products = await db.query(
            `
            SELECT *
            FROM products 
            WHERE 
            ($1::numeric IS NULL OR stock >= $1)
            AND ($2::numeric IS NULL OR stock <= $2)
            AND ($3::numeric IS NULL OR price >= $3)
            AND ($4::numeric IS NULL OR price <= $4)
            AND ($5::text IS NULL OR name ILIKE $5)
            AND ($6::numeric[] IS NULL OR category_id = ANY($6))
            ORDER BY name ASC
            LIMIT $7 OFFSET $8
            `,
            [
                stockMin ? Number(stockMin) : null,
                stockMax ? Number(stockMax) : null,
                priceMin ? Number(priceMin) : null,
                priceMax ? Number(priceMax) : null,
                name ? `%${name}%` : null,
                categoryIds
                    ? typeof categoryIds == "string"
                        ? [Number(categoryIds)]
                        : categoryIds.map(Number)
                    : null,
                limit,
                offset,
            ]
        );

        const categories = await db.query(
            `
            SELECT *
            FROM categories
            `
        );

        const formatedProducts = products.rows.map((product) => {
            for (const category of categories.rows) {
                if (category.id == product.category_id) {
                    return {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        stock: product.stock,
                        created_at: product.created_at,
                        updated_at: product.updated_at,
                        image: product.image,
                        category: category,
                    };
                }
            }
        });

        let total = await db.query(
            `
            SELECT COUNT(*)
            FROM products 
            WHERE 
            ($1::numeric IS NULL OR stock >= $1)
            AND ($2::numeric IS NULL OR stock <= $2)
            AND ($3::numeric IS NULL OR price >= $3)
            AND ($4::numeric IS NULL OR price <= $4)
            AND ($5::text IS NULL OR name ILIKE $5)
            AND ($6::numeric[] IS NULL OR category_id = ANY($6))
            `,
            [
                stockMin ? Number(stockMin) : null,
                stockMax ? Number(stockMax) : null,
                priceMin ? Number(priceMin) : null,
                priceMax ? Number(priceMax) : null,
                name ? `%${name}%` : null,
                categoryIds
                    ? typeof categoryIds == "string"
                        ? [Number(categoryIds)]
                        : categoryIds.map(Number)
                    : null,
            ]
        );

        total = parseInt(total.rows[0].count);

        return res.status(200).json({
            code: 200,
            description: "Products founded",
            data: {
                products: formatedProducts,
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

exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, stock, price, category_id, method } = req.body;

        const product = await db.query(
            `
            SELECT *
            FROM products
            WHERE id = $1
            `,
            [Number(productId)]
        );

        if (product.rows.length === 0) {
            return res.status(404).json({
                code: 404,
                description: "Product not found",
            });
        }

        const updatedProduct = await db.query(
            `
            UPDATE products
            SET 
                name = $1,
                stock = $2,
                price = $3,
                category_id = $4
            WHERE id = $5
            RETURNING *
            `,
            [
                name ? name : product.rows[0].name,
                stock ? Number(stock) : product.rows[0].stock,
                price ? parseFloat(price) : product.rows[0].price,
                category_id ? category_id : product.rows[0].category_id,
                product.rows[0].id,
            ]
        );

        let updatedProductData = updatedProduct.rows[0];

        const category = await db.query(
            `SELECT * FROM categories WHERE id = $1`,
            [updatedProductData.category_id]
        );

        delete updatedProductData.category_id;

        updatedProductData = {
            ...updatedProductData,
            category: category.rows[0],
        };

        if (method && method == "ajax") {
            return res.status(200).json({
                code: 200,
                description: "Product updated",
                data: updatedProductData,
            });
        }
        return res.redirect("http://localhost:5173/products");
    } catch (error) {
        return res.status(500).json({
            code: 400,
            description: error.message,
        });
    }
};
