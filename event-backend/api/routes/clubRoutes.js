const express = require('express');
const clubController= require("../controllers/clubController.js");
const router = express.Router();

router.post("/",clubController.createClub);
router.get("/",clubController.getClubs);
router.get("/:id",clubController.getClub);
router.get("/:club/events",clubController.getClubEvents);

module.exports= router;