const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// Route to get all customers
router.get("/", customerController.getAllCustomers);
router.get("/:id/orders", customerController.getOrdersByCustomer)

module.exports = router;
