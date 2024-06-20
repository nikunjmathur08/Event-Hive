const express = require('express');
const eventController= require("../controllers/eventController.js");
const router = express.Router();

router.post("/",eventController.createEvent);
router.get("/",eventController.getEvents);
router.get("/:id",eventController.getEvent);
router.get("/category/:category",eventController.getEventbyCategory);
router.get("/category/:category/past",eventController.getPastEvents);
router.get("/category/:category/upcoming",eventController.getUpcomingEvents);
router.get("/category/:category/ongoing",eventController.getOngoingEvents);


module.exports= router;