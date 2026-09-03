const Order = require("../models/Order");

// ==========================================
// CREATE NEW ORDER
// ==========================================

const createOrder = async (req, res) => {
    try {
        const {
            user,
            customerName,
            phone,
            address,
            city,
            pincode,
            items,
            subtotal,
            deliveryCharge,
            totalAmount,
            paymentMethod
        } = req.body;

        // Basic validation
        if (
            !customerName ||
            !phone ||
            !address ||
            !city ||
            !pincode ||
            !items ||
            items.length === 0
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required order details."
            });
        }

        // Generate order ID
        const orderId =
            "BK" + Math.floor(100000 + Math.random() * 900000);

        // Create order
        const order = new Order({
            orderId,
            user: user || undefined,
            customerName,
            phone,
            address,
            city,
            pincode,
            items,
            subtotal,
            deliveryCharge: deliveryCharge || 0,
            totalAmount,
            paymentMethod: paymentMethod || "Cash on Delivery"
        });

        // Save order to MongoDB
        const savedOrder = await order.save();

        res.status(201).json({
            success: true,
            message: "Order placed successfully.",
            order: savedOrder
        });

    } catch (error) {
        console.error("Create Order Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to place order.",
            error: error.message
        });
    }
};


// ==========================================
// GET ALL ORDERS
// ==========================================

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("user")
            .populate("items.food")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            orders
        });

    } catch (error) {
        console.error("Get Orders Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch orders.",
            error: error.message
        });
    }
};


// ==========================================
// GET SINGLE ORDER
// ==========================================

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({
            orderId: req.params.orderId
        })
            .populate("user")
            .populate("items.food");

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found."
            });
        }

        res.status(200).json({
            success: true,
            order
        });

    } catch (error) {
        console.error("Get Order Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch order.",
            error: error.message
        });
    }
};


module.exports = {
    createOrder,
    getOrders,
    getOrderById
};