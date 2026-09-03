const express = require("express");

const {
    createRazorpayOrder,
    verifyPayment
} = require("../controllers/PaymentController");

const router = express.Router();

// Create Razorpay order
router.post("/create-order", createRazorpayOrder);

// Verify Razorpay payment
router.post("/verify", verifyPayment);

module.exports = router;