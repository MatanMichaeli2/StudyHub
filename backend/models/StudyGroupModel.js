const mongoose = require("mongoose");
const studyGroupCardSchema = new mongoose.Schema({
    subjectTopic: {
      type: String,
      required: true,
    },
    participantsCount: {
      type: Number,
      required: true,
      default: 0,
    },
    maxParticipants: {
      type: Number,
      required: true,
      default: 10,
    },
    participants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    }
  });
  
  const CardScheme = mongoose.model("studygroup",studyGroupCardSchema);
  module.exports = CardScheme;