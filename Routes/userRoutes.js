const express = require('express');
const { registerUser, users } = require('../Controllers/userController');
const router = express.Router();

// Define routes and link them to controller methods
router.post('/users', registerUser);
router.get('/users', users);

module.exports = router;
