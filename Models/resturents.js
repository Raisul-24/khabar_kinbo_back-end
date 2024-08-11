const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {  
    type: String,
    required: true,
    unique: true,
  },
  bio: { 
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: true,
    unique: true,
  },
  rating:{
    type: Number,
    required: true,
    unique: false,
  },
  location:{
    type: String,
    required: true,
    unique: false,
  },
  open_close_time:{
    type: String,
    required: true,
    unique: false,
  },
});

const Restaurant = mongoose.model('Restaurant', locationSchema , 'restaurant');

module.exports = Restaurant;
