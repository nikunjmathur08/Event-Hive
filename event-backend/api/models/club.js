const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClubSchema = new Schema({
  name: {
    type: String, 
    required: true,
  },
  desc: {
    type: String,
    required: true
  },
  photo: {
    type: [String],
  },
  link: {
    type: String,
  },
  Timestamp: {
    type: Date,
    default: Date.now
  } ,
});

const ClubModel = mongoose.model('Club', ClubSchema);

module.exports = ClubModel;