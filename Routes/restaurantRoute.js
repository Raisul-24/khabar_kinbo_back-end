const express = require('express');
const { restaurant } = require('../Controllers/restaurantControler');
const router = express.Router();

router.get('/restaurant', restaurant);

module.exports = router;
