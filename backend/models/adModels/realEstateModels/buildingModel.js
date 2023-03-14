const Base = require('./basePropertyModel');

const BuildingSchema = Base.discriminator(
  'Building',
  new mongooseSchema({
    propertyType: {
      type: String,
      required: true,
      enum: ['for sale', 'rental', 'wanted'],
      deafult: 'for sale',
    },
    floor: String,
    unitsPerStorey: String,
    heatingType: String,
    Features: {
      elevator: Boolean,
      security: Boolean,
      undergroundParking: Boolean,
      emergencyStairway: Boolean,
      Amenities: Boolean,
      Garden: Boolean,
      PowerSupply: Boolean,
    },
  })
);

const Building = mongoose.model('Building', BuildingSchema);
module.exports = Building;
