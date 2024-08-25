const express = require('express');
const { submitRestaurant, requestedRestaurants } = require('../Controllers/registerRestaurantController');
const router = express.Router();

// Define routes and link them to controller methods
router.post('/requestRestaurant', submitRestaurant);
router.get('/requestRestaurant', requestedRestaurants);

module.exports = router;
