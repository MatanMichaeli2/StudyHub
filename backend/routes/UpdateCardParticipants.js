const express = require('express');
const updateCardRouter = express.Router();
const StudyGroup = require('../models/StudyGroupModel');

// Route to handle updating the number of participants for a study group card
updateCardRouter.post("/updated", async (req, res) => {
  const { username, participantsCount } = req.body;

  try {
    // Find the study group card by username and update the participantsCount field
    const updatedCard = await StudyGroup.findOneAndUpdate(
      { teacher: username }, // Assuming teacher field stores the username
      { participantsCount },
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
