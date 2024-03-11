// backend/routes/AddStudyGroupRoutes.js

const express = require('express');
const router = express.Router();
const {CardScheme} = require('../models/StudyGroupModel');

// Route to create a new study group
router.post('/created', async (req, res) => {
  const { subjectTopic, teacher } = req.body;

  try {
    // Create a new study group document
    const newStudyGroup = new CardScheme({
      subjectTopic,
      teacher
    });

    // Save the study group to the database
    const createdStudyGroup = await newStudyGroup.save();

    res.status(201).json(createdStudyGroup);
  } catch (error) {
    console.error('Error creating study group:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = {
  router,
};
