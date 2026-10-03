const User = require("../models/User");
const bcrypt = require("bcryptjs");

// ================================
// SIGN UP
// ================================
const signup = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            address,
            city,
            pincode,
            password
        } = req.body;

        // Check all fields
        if (
            !name ||
            !email ||
            !phone ||
            !address ||
            !city ||
            !pincode ||
            !password
        ) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        // Create user
        const user = await User.create({
            name,
            email,
            phone,
            address,
            city,
            pincode,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Signup successful",

            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                city: user.city,
                pincode: user.pincode
            }
        });

    } catch (error) {
        console.error("Signup Error:", error);

        res.status(500).json({
            message: "Signup failed",
            error: error.message
        });
    }
};


// ================================
// LOGIN
// ================================
const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        // Check fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Please enter email and password"
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Compare password
        const isPasswordCorrect =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        res.status(200).json({
            message: "Login successful",

            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                city: user.city,
                pincode: user.pincode
            }
        });

    } catch (error) {
        console.error("Login Error:", error);

        res.status(500).json({
            message: "Login failed",
            error: error.message
        });
    }
};


// ================================
// UPDATE PROFILE
// ================================
const updateProfile = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            address,
            city,
            pincode
        } = req.body;

        // Check all fields
        if (
            !name ||
            !email ||
            !phone ||
            !address ||
            !city ||
            !pincode
        ) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        // Find user
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Check if email is already used by another user
        const existingUser = await User.findOne({
            email: email.toLowerCase(),
            _id: { $ne: req.params.id }
        });

        if (existingUser) {
            return res.status(400).json({
                message: "Email is already in use"
            });
        }

        // Update user details
        user.name = name;
        user.email = email.toLowerCase();
        user.phone = phone;
        user.address = address;
        user.city = city;
        user.pincode = pincode;

        const updatedUser = await user.save();

        // Send updated user back to frontend
        res.status(200).json({
            message: "Profile updated successfully",

            user: {
                id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                phone: updatedUser.phone,
                address: updatedUser.address,
                city: updatedUser.city,
                pincode: updatedUser.pincode
            }
        });

    } catch (error) {
        console.error("Update Profile Error:", error);

        res.status(500).json({
            message: "Profile update failed",
            error: error.message
        });
    }
};


// ================================
// EXPORT
// ================================
module.exports = {
    signup,
    login,
    updateProfile
};