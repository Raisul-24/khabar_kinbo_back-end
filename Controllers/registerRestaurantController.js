// controllers/restaurantController.js
const RequestRegisterRestaurant = require('../Models/registerRestaurantModel');

const submitRestaurant = async (req, res) => {
  try {
    const restaurant = new RequestRegisterRestaurant(req.body);
    await restaurant.save();
    res.status(201).json({ message: 'Restaurant submitted successfully', restaurant });
  } catch (error) {
    console.error('Error while submitting restaurant:', error);

    if (error.name === 'ValidationError') {
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

// Get all restaurants
const requestedRestaurants = async (req, res) => {
  try {
    const restaurants = await RequestRegisterRestaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'Failed to fetch restaurants. Please try again later.' });
  }
};

module.exports = { submitRestaurant, requestedRestaurants };
