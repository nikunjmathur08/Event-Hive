const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventSchema = new Schema({
  name: {
    type: String, 
    required: true,
  },
  club: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  photo: {
    type: [String],
  },
  startDate: {
    type: Date,
    required: true
},
endDate: {
  type: Date,
  required: true
},
  time: {
    type: String,
    required: true
  },
  venue:{
    type: String,
    required: true
  } ,
  category: {
    type: String,
    enum: ['Hackathon', 'Recruitment','Events'],
    required: true
  },
  resigtrationLink: {
    type: String,
  },
  Timestamp: {
    type: Date,
    default: Date.now
  } ,
});

const EventModel = mongoose.model('Event', EventSchema);

module.exports = EventModel;