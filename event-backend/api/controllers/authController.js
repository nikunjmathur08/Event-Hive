const User = require("../models/user.js");
const Club = require("../models/club.js");
const bcrypt = require("bcryptjs");
const { createError } = require("../middleware/error.js");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res,next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    // validate both passwords
    if (password !== confirmPassword) {
      return next(createError(400, 'Passwords do not match'));
    }
    // check if user already exists
    const existingUser = await User.findOne({ email});
    if (existingUser) {
      return next(createError(400, "User already exists!"));
    }
    // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    //giving admin role to the user
    let isAdmin = false;
    const admin = await Club.findOne({adminEmail: email});
    if (admin) {
      isAdmin = true;
    }
    // create a new user
    const newUser = new User({
      name,
      email,
      password: hash,
      isAdmin});
    // save the user
    await newUser.save();
    res.status(200).json({message: "User has been created.",
      details: {name, email, isAdmin}}
    );
  } catch (err) {
    next(err);
  }
};


exports.signin = async (req, res,next) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return next(createError(404, "User not found!")); }
    // check if password is correct
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
        return next(createError(400, "Invalid password!"));}
    // create and assign a token
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.TOKEN);  
    const { pass, isAdmin, ...other } = user._doc;
    // send the token in a cookie
    res.cookie("token", token, {
      httpOnly: true,
    }) // send the response
    .status(200).json({message: "User has been logged in."
      ,details: {...other}, isAdmin});  
    } catch(err) {
      next(err);
    }
  };