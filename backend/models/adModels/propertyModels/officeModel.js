const mongoose = require('mongoose');
const Base = require('./basePropertyModel');

const OfficeSchema = Base.discriminator(
  'Office',
  new mongoose.Schema({
    heatingType: {
      type: String,
      enum: ['Furnace', 'Boiler', 'Heat pump', 'Gas', 'Electric', 'Fireplace'],
    },
    intFeatures: [String],
    extFeatures: [String],
    officeType: {
      type: String,
      required: [true, 'An office must have an office type'],
      enum: ['building', 'building floor'],
    },
  })
);

const Office = mongoose.model('Office');

module.exports = Office;
