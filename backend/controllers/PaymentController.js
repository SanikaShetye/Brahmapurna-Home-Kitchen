const Razorpay = require("razorpay");
const crypto = require("crypto");
const Order = require("../models/Order");

// Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});


// =====================================================
// CREATE RAZORPAY ORDER
// =====================================================

const createRazorpayOrder = async (req, res) => {
    try {
        const { amount } = req.body;

        // Validate amount
        if (!amount || Number(amount) <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid payment amount."
            });
        }

        const options = {
            amount: Math.round(Number(amount) * 100),
            currency: "INR",
            receipt: "receipt_" + Date.now()
        };

        const razorpayOrder = await razorpay.orders.create(options);

        res.status(201).json({
            success: true,
            message: "Razorpay order created successfully.",
            order: razorpayOrder,
            key: process.env.RAZORPAY_KEY_ID
        });

    } catch (error) {
        console.error("Create Razorpay Order Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create Razorpay order.",
            error: error.message
        });
    }
};


// =====================================================
// VERIFY RAZORPAY PAYMENT
// =====================================================

const verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            orderId
        } = req.body;

        // Validate required payment details
        if (
            !razorpay_order_id ||
            !razorpay_payment_id ||
            !razorpay_signature
        ) {
            return res.status(400).json({
                success: false,
                message: "Missing payment verification details."
            });
        }

        // Create signature body
        const body =
            razorpay_order_id + "|" + razorpay_payment_id;

        // Generate expected signature
        const expectedSignature =
            crypto
                .createHmac(
                    "sha256",
                    process.env.RAZORPAY_KEY_SECRET
                )
                .update(body)
                .digest("hex");

        // Compare signatures
        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: "Payment verification failed."
            });
        }


        // =================================================
        // UPDATE OUR MONGODB ORDER
        // =================================================

        let updatedOrder = null;

        if (orderId) {
            updatedOrder = await Order.findOneAndUpdate(
                { orderId: orderId },
                {
                    paymentStatus: "Paid",
                    razorpayOrderId: razorpay_order_id,
                    razorpayPaymentId: razorpay_payment_id,
                    razorpaySignature: razorpay_signature,
                    orderStatus: "Confirmed"
                },
                { new: true }
            );
        }


        // =================================================
        // SUCCESS RESPONSE
        // =================================================

        res.status(200).json({
            success: true,
            message: "Payment verified successfully.",
            paymentId: razorpay_payment_id,
            razorpayOrderId: razorpay_order_id,
            order: updatedOrder
        });

    } catch (error) {
        console.error("Payment Verification Error:", error);

        res.status(500).json({
            success: false,
            message: "Payment verification failed.",
            error: error.message
        });
    }
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {
    createRazorpayOrder,
    verifyPayment
};