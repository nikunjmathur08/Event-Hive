const jwt = require('jsonwebtoken');
const {createError} = require("../middleware/error.js");

//check if user is logged in
const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(createError(401, "Access denied!"));
  }
  jwt.verify(token, process.env.TOKEN, (err, user) => {
    if (err) {
      return next(createError(403, "Invalid token!"));
    }
    req.user = user;
    next();
  });
};

// check if user is verified
exports.verifyUser = async (req, res, next) => {
  verifyToken(req,res,()=>{
    if (req.user.id == req.params.id) {
      next();
    } else{
      return next(createError(403, "Access denied!")); }
    });
};

// check if user is admin
exports.checkAdmin = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
    next();
  } else {
    return next(createError(403, "Access denied!"));}
});
};

