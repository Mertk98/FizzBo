const mongoose = require('mongoose');
const Base = require('./basePropertyModel');

const LandSchema = Base.discriminator(
  'Land',
  new monsooge.Schema({
    MLS: String,
    taxDetails: {
      amount: Number,
      currency: String,
      year: Number,
    },
    neighbourhood: String,
    zoning: String,
  })
);

const Land = mongoose.model('Land');

module.exports = Land;
