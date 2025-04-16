const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.put("/:id", orderController.updateProductsOnOrder);

module.exports = router;
