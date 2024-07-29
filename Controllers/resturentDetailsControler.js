const RestaurantDetails = require("../Models/restaurantDetailsModal");

// createRestaurant = async (req, res) => {
//   try {
//     const restaurant = new RestaurantDetails(req.body);
//     await restaurant.save();
//     res.status(201).json({ message: 'Restaurant created successfully', restaurant });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// Get all restaurants
getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await RestaurantDetails.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a restaurant by ID
// updateRestaurant = async (req, res) => {
//   try {
//     const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!restaurant) {
//       return res.status(404).json({ message: 'Restaurant not found' });
//     }
//     res.status(200).json({ message: 'Restaurant updated successfully', restaurant });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// Delete a restaurant by ID
// deleteRestaurant = async (req, res) => {
//   try {
//     const restaurant = await RestaurantDetails.findByIdAndDelete(req.params.id);
//     if (!restaurant) {
//       return res.status(404).json({ message: 'Restaurant not found' });
//     }
//     res.status(200).json({ message: 'Restaurant deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = { getAllRestaurants };