const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const router = express.Router();

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found, please sign up." });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Check email domain for admin
    if (email.endsWith("@e-polytechnique.ma")) {
      const Role = (user.role = "admin");
      if (Role === "admin") {
        return res.status(200).json({ redirect: "/adminpage" }); // Redirect for admin
      } else if (Role === "client") {
        return res.status(200).json({ redirect: "/Productspage" }); // Redirect for client
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/check-email", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({ exists: true });
    }
    return res.status(200).json({ exists: false });
  } catch (err) {
    console.error("Error checking email:", err);
    return res.status(500).json({ message: "Error checking email" });
  }
});

// Register a new user
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Determine the role based on email domain
    const isAdmin = email.endsWith("@e-polytechnique.ma");
    const role = isAdmin ? "admin" : "client";

    const newUser = new User({
      email,
      password: hashedPassword,
      isAdmin,
      role,
    });

    await newUser.save();

    console.log("New user registered with role:", role);

    return res
      .status(201)
      .json({ message: "User registered successfully!", role });
  } catch (err) {
    console.error("Error registering user:", err);
    return res.status(500).json({ message: "Error registering user" });
  }
});

module.exports = router;
