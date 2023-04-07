const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const basePropertyOptions = {
  discriminatorKey: 'propertyType',
  collection: 'properties',
};

const basePropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A property must have a name'],
      trim: true,
      maxLength: [70, 'A property name cannot have more than 70 charecters'],
      minLength: [10, 'A property name cannot have less than 10 characters'],
    },
    adNumber: {
      type: String,
      required: true,
      default: nanoid(18),
      index: { unique: true },
    },
    adType: {
      type: String,
      required: true,
      enum: ['for sale', 'rental', 'wanted'],
      deafult: 'for sale',
    },
    slug: String,
    dimensions: {
      totalSize: Number,
      unit: {
        type: String,
        enum: {
          values: ['m2', 'ft2'],
          message: 'Dimension unit must be either m2 or ft2!',
        },
      },
    },
    sellerType: {
      type: String,
      enum: {
        values: ['private', 'real estate agency'],
        message: 'A property must have a seller type of private or agency',
      },
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    trade: Boolean,
    price: {
      type: Number,
      required: [true, 'A property must have a price'],
    },
    builtYear: Number,
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A property must have an image cover'],
    },
    images: [String],
    sold: {
      type: Boolean,
      default: false,
    },
    Location: {
      type: {
        type: String,
        default: 'Polygon',
        enum: ['Polygon'],
      },
      coordinates: {
        type: [[[Number]]],
        required: true,
      },
      address: String,
      description: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  basePropertyOptions
);

basePropertySchema.pre('save', function (next) {
  this.slug = this.adNumber;
  next();
});

const baseProperty = mongoose.model('Property', basePropertySchema);

module.exports = baseProperty;
