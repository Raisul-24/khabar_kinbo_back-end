const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  location: {  
    type: String,
    required: true,
    unique: true,
  },
  restaurant: { 
    type: Number,
    required: true,
    unique: false,
  }
});

const Location = mongoose.model('Location', locationSchema , 'location');

module.exports = Location;
