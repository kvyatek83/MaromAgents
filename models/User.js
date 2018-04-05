var mongoose = require('mongoose');
var config = require('../config/database');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Please enter the username of the user'
  },
  password: {
    type: String,
    required: 'Please enter the password of the user'
  },
  premission: {
    type: [{
        type: String,
        enum: ['admin', 'agnet', 'guest']
    }],
    default: ['guest']
  }
});

module.exports = mongoose.model('User', UserSchema);