const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
});
const db = require("../db");

exports.getAllProducts = async (req, res) => {
    try {
        const { stockMax, stockMin, priceMax, priceMin, name } = req.query;
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        const products = await prisma.product.findMany({
            where: {
                stock: {
                    gte: Number(stockMin) || undefined,
                    lte: Number(stockMax) || undefined,
                },
                price: {
                    gte: Number(priceMin) || undefined,
                    lte: Number(priceMax) || undefined,
                },
                name: {
                    contains: name || undefined,
                    mode: "insensitive",
                },
            },
            skip: skip,
            take: limit,
        });

        const total = await prisma.product.count({
            where: {
                stock: stockMin ? { gte: Number(stockMin) } : undefined,
                price: priceMax ? { lte: Number(priceMax) } : undefined,
            },
        });

        return res.status(200).json({
            code: 200,
            description: "Products founded",
            data: {
                products: products,
                page: {
                    current_page: page,
                    limit: limit,
                    total: total,
                    totalPages: Math.ceil(total / limit),
                },
            },
        });
    } catch (error) {
        return res.status(500).json({
            code: 400,
            description: error.message,
        });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, stock, price } = req.body;

        const product = await prisma.product.findUnique({
            where: {
                id: Number(productId),
            },
        });

        if (!product) {
            return res.status(404).json({
                code: 404,
                description: "Product not found",
            });
        }

        const updatedProduct = await prisma.product.update({
            where: { id: Number(productId) },
            data: {
                name: name || product.name,
                stock: stock !== undefined ? Number(stock) : product.stock,
                price: price !== undefined ? parseFloat(price) : product.price,
            },
        });

        return res.status(200).json({
            code: 200,
            description: "Product updated",
            data: updatedProduct,
        });
    } catch (error) {
        return res.status(500).json({
            code: 400,
            description: error.message,
        });
    }
};
