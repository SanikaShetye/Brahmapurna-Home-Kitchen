const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        // ==========================================
        // ORDER ID
        // ==========================================

        orderId: {
            type: String,
            required: true,
            unique: true
        },

        // ==========================================
        // USER
        // ==========================================

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false
        },

        // ==========================================
        // CUSTOMER DETAILS
        // ==========================================

        customerName: {
            type: String,
            required: true,
            trim: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        address: {
            type: String,
            required: true,
            trim: true
        },

        city: {
            type: String,
            required: true,
            trim: true
        },

        pincode: {
            type: String,
            required: true,
            trim: true
        },

        // ==========================================
        // ORDER ITEMS
        // ==========================================

        items: [
            {
                food: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Food",
                    required: true
                },

                name: {
                    type: String,
                    required: true
                },

                price: {
                    type: Number,
                    required: true
                },

                quantity: {
                    type: Number,
                    required: true,
                    min: 1
                }
            }
        ],

        // ==========================================
        // PRICE DETAILS
        // ==========================================

        subtotal: {
            type: Number,
            required: true
        },

        deliveryCharge: {
            type: Number,
            default: 0
        },

        totalAmount: {
            type: Number,
            required: true
        },

        // ==========================================
        // PAYMENT DETAILS
        // ==========================================

        paymentMethod: {
            type: String,
            enum: [
                "Cash on Delivery",
                "Online Payment"
            ],
            required: true
        },

        paymentStatus: {
            type: String,
            enum: [
                "Pending",
                "Paid",
                "Failed"
            ],
            default: "Pending"
        },

        // ==========================================
        // RAZORPAY DETAILS
        // ==========================================

        razorpayOrderId: {
            type: String,
            default: null
        },

        razorpayPaymentId: {
            type: String,
            default: null
        },

        razorpaySignature: {
            type: String,
            default: null
        },

        // ==========================================
        // ORDER STATUS
        // ==========================================

        orderStatus: {
            type: String,
            enum: [
                "Pending",
                "Confirmed",
                "Preparing",
                "Out for Delivery",
                "Delivered",
                "Cancelled"
            ],
            default: "Pending"
        }
    },

    // ==========================================
    // TIMESTAMPS
    // ==========================================

    {
        timestamps: true
    }
);

module.exports = mongoose.model("Order", orderSchema);