const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.put("/:id", productController.updateProduct)

module.exports = router;
