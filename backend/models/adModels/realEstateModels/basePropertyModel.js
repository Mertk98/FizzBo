const mongoose = require('mongoose');
const slugify = require('slugify');

const basePropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A property must have a name'],
      trim: true,
      maxLength: [70, 'A property name cannot have more than 70 charecters'],
      minLength: [10, 'A property name cannot have less than 10 characters'],
    },
    slug: String,
    dimensions: {
      type: Number,
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
        message: 'A property must have a seller type',
      },
    },
    createdAt: {
      type: Date,
      default: date.now(),
    },
    trade: Boolean,
    price: {
      type: Number,
      required: [true, 'A property must have a price'],
    },
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
  }
);

const baseProperty = mongoose.model('BaseProperty', basePropertySchema);

module.exports = baseProperty;
