const express = require('express');
const { getAllRestaurants } = require('../Controllers/resturentDetailsControler');
const router = express.Router();

// Define routes and link them to controller methods
// router.post('/restaurants', createRestaurant);
router.get('/restaurantsDetails', getAllRestaurants);
// router.get('/restaurants/:id', restaurantController.getRestaurantById);
// router.put('/restaurants/:id', restaurantController.updateRestaurant);
// router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

module.exports = router;
