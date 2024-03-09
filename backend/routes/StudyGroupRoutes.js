// StudyGroupRoutes.js

const express = require('express');
const router = express.Router();
const StudyGroup = require('../models/StudyGroupModel');
const User = require('../models/userModel');

// Route to fetch study groups related to the logged-in teacher
router.get('/', async (req, res) => {
  try {
    // Get the ID of the logged-in teacher from the request or session
    const loggedInTeacherId = req.user._id; // Assuming you have authentication middleware that adds the logged-in user to the request object
    
    // Fetch study groups where the teacher field matches the logged-in teacher's ID
    const studyGroups = await StudyGroup.find({ teacher: loggedInTeacherId }).populate('teacher', 'firstName lastName');

    res.json(studyGroups);
  } catch (error) {
    console.error('Error fetching study groups:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
