const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {  
    type: String,
    required: true,
    unique: true,
  },
  phone: {
   type: String,
   required: false,
   unique: true,
 },
  name: { 
    type: String,
    required: true,
    unique: false,
  },
  address:{
    type: String,
    required: false,
    unique: false,
  },
});

const User = mongoose.model('Users', userSchema , 'users');
module.exports = User;
