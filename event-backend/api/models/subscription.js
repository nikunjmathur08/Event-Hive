const mongoose = require('mongoose');
const {Schema} = mongoose;

const SubscriptionSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  Timestamp: {
    type: Date,
    default: Date.now
  },
});

const SubscriptionModel = mongoose.model('Subscription', SubscriptionSchema);
module.exports = SubscriptionModel;