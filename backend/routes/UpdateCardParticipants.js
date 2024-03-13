const express = require('express');
const updateCardRouter = express.Router();
const StudyGroup = require('../models/StudyGroupModel');
const mongoose = require('mongoose'); // Import Mongoose


// Route to handle updating the maximum number of participants for a study group card
updateCardRouter.post("/updated", async (req, res) => {
  const { id, maxParticipants } = req.body;

  try {
    // Find the study group card by its ID and update the maxParticipants field
    const updatedCard = await StudyGroup.findByIdAndUpdate(
      id,
      { maxParticipants },
      { new: true }
    );
    
    // Check if the card was found and updated successfully
    if (updatedCard) {
      res.status(200).json(updatedCard);
    } else {
      res.status(404).json({ message: "Study group card not found" });
    }
  } catch (error) {
    console.error('Error updating study group card:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = updateCardRouter;
