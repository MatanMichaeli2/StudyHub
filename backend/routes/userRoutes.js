const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/users");

const userRouter = express.Router();

// Register route
userRouter.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      id,
      username,
      password,
      role,
      institution,
      studyField,
    } = req.body;

    // Check if user already exists
    const doesUserExist = await UserModel.findOne({ email });
    if (doesUserExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new UserModel({
      username,
      email,
      password: hashedPassword,
      firstName,
      institution,
      lastName,
      role,
      studyField,
    });

    // Save the user to the database
    await user.save();

    const userData = user.toObject();
    delete userData.password;

    res.status(201).json({ message: "User registered successfully", userData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
userRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });

    const userData = user.toObject();
    delete userData.password;

    res.json({ token, userData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = {
  userRouter,
};