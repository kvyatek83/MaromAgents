var mongoose = require('mongoose');
var config = require('../config/database');

var ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Please enter the name of the item'
      },
      productCode: {
        type: String
      },
      family: {
        type: [{
            type: String,
            enum: ['פנים', 'עיניים', 'שפתיים', 'כללי', 'אין']
        }]
      },
      company: {
        type: [{
            type: String,
            enum: ['מייבלין', 'לוריאל', 'בורזואה', 'רבלון', 'מקס פקטור', 'אין']
        }]
      },
      gender: {
        type: [{
            type: String,
            enum: ['אישה', 'גבר']
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
        default: "https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg"
      }
  });

  module.exports = mongoose.model('Item', ItemSchema);