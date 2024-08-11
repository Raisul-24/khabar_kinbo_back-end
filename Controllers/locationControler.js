const asyncHandler = require('express-async-handler');
const Location = require('../Models/locationModal');

const location = asyncHandler(async (req, res) => {
    try {
        // Fetch all location data from the database
        const locations = await Location.find();
        // Return the data as a JSON response
        res.status(200).json(locations);
    } catch (error) {
        // Handle any errors that occur during the database query
        res.status(500).json({ message: error.message }); // Changed to status 500 for server errors
    }
});

module.exports = { location };
