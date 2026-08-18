const express = require("express");

const router = express.Router();

const {
    getFoods,
    getFoodById,
    createFood
} = require("../controllers/FoodController");

// Get all food items
router.get("/", getFoods);

// Get one food item
router.get("/:id", getFoodById);

// Create a food item
router.post("/", createFood);

module.exports = router;