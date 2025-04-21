const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrder);
router.put("/:id", orderController.updateProductsOnOrder);
router.put("/:id/status", orderController.updateOrderStatus);
router.post(
    "/:id/customers/:customerId",
    orderController.addOrDeleteProductsOnOrder
);

module.exports = router;
