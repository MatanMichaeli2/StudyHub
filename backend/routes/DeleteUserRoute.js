// DeleteUserRoute.js
const express = require('express');
const deleteRouter = express.Router();
const UserModel = require('../models/users'); // Import User model

deleteRouter.delete('/Deluser/:id', async (req, res) => {
  const userId = req.params.id; // Get user ID from request params

  try {
    // Find the user by ID and delete it
    const deletedUser = await UserModel.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = deleteRouter;
