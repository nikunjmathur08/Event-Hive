const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscription.js');
const { createError } = require('../utils/error.js');

router.post("/", async (req, res, next) => {
  
  try {
    // check if user is already subscribed
    const existingSubscription = await Subscription.findOne({ email: req.body.email, club: req.body.club });
    if (existingSubscription) {
      return next(createError(500, "You are already subscribed to this club!"));
    }
    const newSubscription = new Subscription(req.body);
    const savedSubscription = await newSubscription.save();
    if (!savedSubscription) {
      return next(createError(400, "Subscription could not be created!"));
    }
    res.status(200).json({ message:"Subscription Created successfully.", details: savedSubscription});
  } catch (err) {
    next(err);
  }
});

module.exports= router;