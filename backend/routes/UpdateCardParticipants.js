const express = require('express');
const router = express.Router();
const StudyGroup = require('../models/StudyGroupModel');

// Route to handle updating the number of participants for a study group card
router.post("/", async (req, res) => {
  const { id, participantsCount } = req.body;

  try {
    // Find the study group card by ID and update the participantsCount field
    const updatedCard = await StudyGroup.findByIdAndUpdate(
      id,
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

module.exports = router;
