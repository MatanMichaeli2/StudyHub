import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  studySubjects: [{
    type: String,
    required: true
  }],
  requestedSubjects: [{
    type: String
  }],
  // Add more fields as needed for your user data
});

const User = mongoose.model('User', userSchema);

export default User;
