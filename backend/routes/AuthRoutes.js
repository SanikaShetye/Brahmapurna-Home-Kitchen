const express = require("express");

const router = express.Router();

const {
    signup,
    login,
    updateProfile
} = require("../controllers/AuthController");

router.post("/signup", signup);

router.post("/login", login);

router.put("/update/:id", updateProfile);

module.exports = router;