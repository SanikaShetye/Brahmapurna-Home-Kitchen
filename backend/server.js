const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const foodRoutes = require("./routes/FoodRoutes");
const categoryRoutes = require("./routes/CategoryRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Brahmapurna Home Kitchen API is running"
    });
});

// API Routes
app.use("/api/foods", foodRoutes);
app.use("/api/categories", categoryRoutes);

// Server port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});