// studyGroupModel.js

import mongoose from 'mongoose';

const studyGroupSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model
  }]
  // Add more fields as needed for your study group data
});

const StudyGroup = mongoose.model('StudyGroup', studyGroupSchema);

export default StudyGroup;
