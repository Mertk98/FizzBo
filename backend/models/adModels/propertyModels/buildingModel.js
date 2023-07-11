const mongoose = require('mongoose');
const Base = require('./basePropertyModel');

const BuildingSchema = Base.discriminator(
  'Building',
  new mongoose.Schema({
    floor: String,
    unitsPerStorey: String,
    heatingType: {
      type: String,
      enum: ['Furnace', 'Boiler', 'Heat pump', 'Gas', 'Electric', 'Fireplace'],
    },
    Features: {
      type: Array,
      default: [],
    },
  })
);

const Building = mongoose.model('Building');

module.exports = Building;
