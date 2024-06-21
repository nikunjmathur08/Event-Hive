const User = require('../models/user.js');


// Get profile name
exports.profile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    res.status(200).json(user.name);
  }
  catch (err) {
    next(err);
  }
}

// update user
exports.update = async (req, res, next) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body},{new : true});
    res.status(200).json({ message: 'User has been updated.', details: updated });
  } catch (err) {
    next(err);
  }
}