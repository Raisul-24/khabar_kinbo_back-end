const asyncHandler = require('express-async-handler');
const Restaurant = require('../Models/resturents');

const restaurant = asyncHandler(async (req, res) => {
    try {
        // Extract the location from query parameters
        const { location } = req.query;

        // If a location is provided, filter by location
        const query = location ? { location } : {};
        console.log(query , location);
        
        // Fetch the data from the database based on the query
        const restaurants = await Restaurant.find(query); // Changed location to query

        // Return the data as a JSON response
        res.status(200).json(restaurants);
    } catch (error) {
        // Handle any errors that occur during the database query
        res.status(500).json({ message: error.message });
    }
});

module.exports = { restaurant };
