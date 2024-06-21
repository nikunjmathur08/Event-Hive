const Event = require('../models/event.js');
const sendMail = require('../middleware/mail.js');
const Subscription = require('../models/subscription.js');
const { createError } = require('../middleware/error.js');

// Create Event
exports.createEvent = async (req, res, next) => {
  const newEvent = new Event(req.body);

  try {
    const savedEvent = await newEvent.save();
    
    if (!savedEvent) {
      return next(createError(400, "Event could not be created!"));
    }
    //send email to all subscribers of the club
    const subscribers = await Subscription.find({ club: req.body.club });
    subscribers.forEach(subscriber => {
      sendMail(subscriber.email, savedEvent);
    });
    res.status(200).json({ message:"Event Created successfully.", details: savedEvent});
  } catch (err) {
    next(err);
  }
};
//all upcoming events in HomePage
exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find({
      startDate: { $gt: new Date() } }).sort({ date: 1    });
    if(!events) return next(createError(404, "No events found!"));
    res.status(200).json(events);
  } catch (err) {
    next(err);
  }
};
//upcoming event by category in Homepage
exports.getEventbyCategory = async (req, res, next) => {  
  try {
    const events = await Event.find({ category: req.params.category,
      startDate: { $gt: new Date() } }).sort({ date: 1 });
    if(events.length==0) {
      res.status(200).json({message: "No events found!"});
        }
    else {
    res.status(200).json(events); }
  } catch (err) {
    next(err);
  }
};
// one event details
exports.getEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return next(createError(404, "Event not found!"));
    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
};
// past events
exports.getPastEvents = async (req, res, next) => {
  try{
    const today = new Date();
    const events = await Event.find({
      category: req.params.category,
      startDate: { $lt: today.setHours(0,0,0,0) },
      endDate:{$lt: today} }).sort({ date: 1 });
      if(events.length==0) {
        res.status(200).json({message: "No events found!"});
          }
      else {
      res.status(200).json(events); }
  } catch (err) {
    next(err);
  }
};
// upcoming events
exports.getUpcomingEvents = async (req, res, next) => {
  try {
    const events = await Event.find({
    category: req.params.category,  
    startDate: { $gt: new Date() } }).sort({ date: 1 });
    if(events.length==0) {
      res.status(200).json({message: "No events found!"}).limit(5);
        }
    else {
    res.status(200).json(events); }
  } catch (err) {
    next(err);
  }
};
// ongoing events
exports.getOngoingEvents = async (req, res, next) => {  
  try {
    const today = new Date();
    const events = await Event.find({
      category: req.params.category,
      startDate: { $lte: today },
      endDate: { $gte: today } }).sort({ date: 1 }).limit(5);
      if(events.length==0) {
        res.status(200).json({message: "No events found!"});
          }
      else {
      res.status(200).json(events); }
  } catch (err) { 
    next(err);
  }
};


