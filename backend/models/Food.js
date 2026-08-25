const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    unit: {
        type: String,
        required: true
    },

    available: {
        type: Boolean,
        default: true
    },

    image: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("Food", foodSchema);