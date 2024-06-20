const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  name: {
    type: String, 
    required: true,
  },
  email: {
    type: String, 
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  Timestamp: {
    type: Date,
    default: Date.now
  } ,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;