const express = require('express');
const router = express.Router();

const {update, profile} = require('../controllers/userController.js');
const {verifyUser} = require('../middleware/verify.js');

router.get('/profile/:id', verifyUser, profile);
router.put('/update/:id', verifyUser, update);

module.exports = router;