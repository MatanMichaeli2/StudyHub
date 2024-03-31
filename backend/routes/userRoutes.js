const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/users");
const { StudyGroupModel } = require("../models/StudyGroupModel");

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

// Update user profile route
userRouter.post("/update", async (req, res) => {
  try {
    const { id, firstName, lastName, email, password } = req.body;

    // Find the user by ID
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user details
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;

    // Only update the password if it's provided
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    // Save the updated user
    await user.save();

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = {
  userRouter,
};
