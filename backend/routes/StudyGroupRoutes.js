// StudyGroupRoutes.js
const express = require('express');
const groupRouter = express.Router();
const StudyGroup = require('../models/StudyGroupModel');
const { CardScheme } = require('../models/StudyGroupModel'); // Assuming CardScheme is the correct model
const { UserModel } = require('../models/users');

// Route to fetch study groups related to the logged-in teacher


groupRouter.get('/card', async (req, res) => {
  try {
    // Get the username of the logged-in teacher from the query parameters
    const loggedInTeacherName = req.query.loggedInTeacherUsername;
    
    // Fetch study groups where the teacher field matches the logged-in teacher's username
    const studyGroups = await CardScheme.find({ teacher: loggedInTeacherName });

    res.json(studyGroups);
  } catch (error) {
    console.error('Error fetching study groups:', error);
    res.status(500).json({ message: 'Server error' });
  }
});












module.exports = groupRouter;
