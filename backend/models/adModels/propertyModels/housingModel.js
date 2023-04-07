const mongoose = require('mongoose');
const Base = require('basePropertyModel');

const HousingSchema = Base.discriminator(
  'Housing',
  new mongoose.Schema({
    bathrooms: String,
    balcony: Boolean,
    furnished: Boolean,
    heatingType: {
      type: String,
      enum: ['Furnace', 'Boiler', 'Heat pump', 'Gas', 'Electric', 'Fireplace'],
    },
    facing: [String],
    intFeatures: [String],
    extFeatures: [String],
    transportation: [String],
    view: [String],
    housingType: {
      type: String,
      enum: ['House', 'Townhouse', 'Apartment', 'Basement'],
    },
  })
);

const Housing = mongoose.model('Housing');

module.exports = Housing;
