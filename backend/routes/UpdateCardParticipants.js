const express = require('express');
const updateCardRouter = express.Router();
const { CardScheme } = require('../models/StudyGroupModel'); // Assuming CardScheme is the correct model
const mongoose = require('mongoose'); // Import Mongoose


// Route to handle updating the maximum number of participants for a study group card
updateCardRouter.patch("/updated", async (req, res) => {
  const { maxParticipants } = req.body;
  const {id} = req.body;
  console.log(maxParticipants);
  console.log(id);
  try {
    
    // Find the study group card by its ID and update the maxParticipants field
    const updatedCard = await CardScheme.findOneAndUpdate( {_id : req.body.id},{ maxParticipants }, { new: true }
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
