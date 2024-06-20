const Club = require('../models/club.js');
const Event = require('../models/event.js');

// Create Club
exports.createClub = async (req,res,next) =>{
  const newClub = new Club(req.body);
  try {
    const savedClub = await newClub.save();
    if (!savedClub) {
      return next(createError(400, "Club could not be created!"));
    }
    res.status(200).json({ message:"Club Created successfully.", details: savedClub});
  } catch (err) {
    next(err);
  }
};

// all clubs
exports.getClubs = async (req, res, next) => {
  try {
    const clubs = await Club.find();
    if(!clubs) return next(createError(404, "No clubs found!"));
    res.status(200).json(clubs);
  } catch (err) {
    next(err);
  }
};

// club details
exports.getClub = async (req, res, next) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) return next(createError(404, "Club not found!"));
    res.status(200).json(club);
  } catch (err) {
    next(err);
  }
};

//club events
exports.getClubEvents = async (req, res, next) => {
  try {
    const clubEvents = await Event.find({ club: req.params.club });
    if(clubEvents.length==0) {
      res.status(200).json({message: "No events found for this club!"});
        }
    else {
    res.status(200).json(clubEvents); }
  } catch (err) {
    next(err);
  }
};