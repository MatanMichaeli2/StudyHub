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
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  // student can create a study group without a teacher
  teacher: {
    type: String,
  },
});

const StudyGroupModel = mongoose.model("studygroup", studyGroupCardSchema);
module.exports = { StudyGroupModel };

StudyGroupModel.find().then((studyGroups) => {
  console.log(studyGroups);
});
