const express = require("express");
const router = express.Router();

// This is wehre we import the controllers we will route
const tripsController = require("../controllers/trips");

// define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET Method router tripList
    .post(tripsController.tripsAddTrip); // POST Method Adds A Trip

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;