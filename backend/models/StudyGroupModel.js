const mongoose = require("mongoose");
const studyGroupCardSchema = new mongoose.Schema({
    subjectTopic: {
      type: String,
      required: false,
    },
    participantsCount: {
      type: Number,
      required: false,
      default: 0,
    },
    maxParticipants: {
      type: Number,
      required: false,
      default: 10,
    },
    participants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
      
    }],
    teacher: {
      type: String,
      required: true,
    }
  });
  
  const CardScheme = mongoose.model("studygroup",studyGroupCardSchema);
  module.exports = {CardScheme};