// controllers/restaurantController.js
const User = require('../Models/usersModel');

const registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error while submitting user:', error);

    if (error.email === 'ValidationError') {
      // Extract validation errors and send a descriptive message
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ error: messages.join(', ') });
    }

    // Handle duplicate key error (e.g., unique fields)
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue);
      return res.status(400).json({ error: `${field} already exists. Please use a different ${field}.` });
    }

    // General server error
    res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
  }
};

// Get all users
const users = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users. Please try again later.' });
  }
};

module.exports = { registerUser, users };
