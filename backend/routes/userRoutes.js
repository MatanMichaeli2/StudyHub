const express = require("express");
const bcrypt = require("bcryptjs");
const { UserModel } = require("../models/users");

const userRouter = express.Router();

// Register route
userRouter.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      role,
      institution,
      studyField,
    } = req.body;

    // Check if user already exists
    const doesUserExist = await UserModel.findOne({ email });
    if (doesUserExist) {
      return res.status(400).json({ message: "User with this email already exists" });
    }
    /// hashing the password (123 -> asd678as567asd57as6d5as76)
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

    const userData = user.toObject();
    delete userData.password;

    res.json({  userData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


// Define route to handle PATCH request for updating user profile by ID
userRouter.patch('/updateById', async (req, res) => {
  console.log("found the route");
  console.log("User object:", req.body); // Assuming the user object is sent in the request body
  console.log("User ID:", req.body._id); // Log the _id field from the request body

  try {
    // Extract data from request body
    const { _id, firstName, lastName, username, email, password } = req.body;

    // Check if _id is provided
    if (!_id) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Find the user by ID
    const user = await UserModel.findById(_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user details
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.username = username || user.username;
    user.email = email || user.email;

    // Update password if provided
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    // Save the updated user
    await user.save();

    // Respond with success message
    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});




// Get all users route
userRouter.get("/all", async (req, res) => {
  try {
    const users = await UserModel.find().select("-password"); // Exclude passwords from the result
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = {
  userRouter,
};
