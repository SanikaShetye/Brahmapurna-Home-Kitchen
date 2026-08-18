const Food = require("../models/Food");

// Get all food items
const getFoods = async (req, res) => {
    try {
        const foods = await Food.find()
            .populate("category", "name");

        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch food items",
            error: error.message
        });
    }
};

// Get single food item
const getFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id)
            .populate("category", "name");

        if (!food) {
            return res.status(404).json({
                message: "Food item not found"
            });
        }

        res.status(200).json(food);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch food item",
            error: error.message
        });
    }
};

// Create food item
const createFood = async (req, res) => {
    try {
        const {
            name,
            category,
            description,
            price,
            image,
            available
        } = req.body;

        const food = await Food.create({
            name,
            category,
            description,
            price,
            image,
            available
        });

        const createdFood = await food.populate("category", "name");

        res.status(201).json(createdFood);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create food item",
            error: error.message
        });
    }
};

module.exports = {
    getFoods,
    getFoodById,
    createFood
};