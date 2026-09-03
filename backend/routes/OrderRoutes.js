const express = require("express");

const {
    createOrder,
    getOrders,
    getOrderById
} = require("../controllers/OrderController");

const router = express.Router();

// Create new order
router.post("/", createOrder);

// Get all orders
router.get("/", getOrders);

// Get single order by Order ID
router.get("/:orderId", getOrderById);

module.exports = router;