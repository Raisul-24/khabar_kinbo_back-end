// models/registerRestaurantModel.js
const mongoose = require('mongoose');

const registerRestaurantSchema = new mongoose.Schema({
  restaurantName: { type: String, required: [true, 'Restaurant name is required.'] },
  ownerName: { type: String, required: [true, 'Owner name is required.'] },
  location: { type: String, required: [true, 'Location is required.'] },
  cuisineType: { type: String, required: [true, 'Cuisine type is required.'] },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required.'],
    match: [/^\+880\d{10}$/, 'Enter a valid Bangladeshi contact number.']
  },
  email: {
    type: String,
    required: [true, 'Email address is required.'],
    match: [/.+\@.+\..+/, 'Enter a valid email address.'],
    unique: true
  },
  businessLicense: { type: String, required: [true, 'Business license number is required.'] },
  tinNumber: { type: String, required: [true, 'TIN number is required.'] },
  deliveryOptions: {
    type: String,
    required: [true, 'Delivery option is required.'],
    enum: {
      values: ['self_delivery', 'partner_delivery'],
      message: 'Delivery option must be either self_delivery or partner_delivery.'
    }
  },
  bankAccount: { type: String, required: [true, 'Bank account details are required.'] }
}, { timestamps: true });

const RequestRegisterRestaurant = mongoose.model('RequestRegisterRestaurant', registerRestaurantSchema);
module.exports = RequestRegisterRestaurant;
