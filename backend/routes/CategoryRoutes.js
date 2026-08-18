const express = require("express");

const router = express.Router();

const {
    getCategories,
    getCategoryById,
    createCategory
} = require("../controllers/CategoryController");

// Get all categories
router.get("/", getCategories);

// Get one category
router.get("/:id", getCategoryById);

// Create category
router.post("/", createCategory);

module.exports = router;