const express = require('express');
const { location } = require('../Controllers/locationControler');
const router = express.Router();

router.get('/locations', location);

module.exports = router;
