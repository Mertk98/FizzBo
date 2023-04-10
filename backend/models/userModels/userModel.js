const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'A user must have a username!'],
      unique: true,
      trim: true,
      maxLength: [25, 'A username must have at most 25 characters!'],
      validate: {
        validator: (val) =>
          validator.isAlphaNumeric(val, [en - US], {
            ignore: '_-',
          }),
        message: "A user name can only contain letters, numbers, '_' and '-'.",
      },
    },
    name: {
      type: String,
      required: [true, 'A user must have a name!'],
      validate: {
        validator: (val) => validator.isAlpha(val, [en - US]),
        message: 'A name can only contain letters',
      },
    },
    lastName: {
      type: String,
      required: [true, 'A user must have a last name'],
      validate: {
        validator: (val) => validator.isAlpha(val, [en - US]),
        message: 'A last name can only contain letters',
      },
    },
    email: {
      type: String,
      required: [true, 'A user must have a name'],
      unique: true,
      lowercase: true,
    },
    gender: String,
    photo: {
      type: String,
      default: 'default_user.jpg',
    },
    password: {
      type: String,
      required: [true, 'A user must have a password'],
      minlength: [8, 'A user password must have at least 8 characters!'],
      maxlength: [32, 'A user password must have at most 32 characters!'],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'A user password must be confirmed'],
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: 'Passwords do not match!',
      },
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: String,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    toJson: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
