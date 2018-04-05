var mongoose = require('mongoose');
var config = require('../config/database');

var ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please enter the name of the item'
      },
      gender: {
        type: [{
            type: String,
            enum: ['נשים', 'גברים']
        }]
      },
      category: {
        type: [{
            type: String,
            enum: ['בושם', 'איפור']
        }]
      },
      price: {
      type: Number
      },
      status: {
        type: [{
          type: String,
          enum: ['זמין', 'לא זמין']
        }],
        default: ['זמין']
      },
      ml: {
        type: Number,
        required: 'Please enter the ml of the item'
      },
      image: {
        type: String,
        default: "some/image"
      }
  });

  module.exports = mongoose.model('Item', ItemSchema);