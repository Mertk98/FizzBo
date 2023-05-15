const User = require('../models/userModels/userModel.js');

exports.checkDuplicateUserName = async (req, res, next) => {
  try {
    const user = User.findOne({ userName: req.body.username });
    if (user) {
      res.status(400).send({
        state: 'failed',
        message: 'Username is already in use!',
      });
    }
    next();
  } catch (err) {
    res.status(500).send({
      state: 'failed',
      message: err,
    });
  }
};

exports.checkDuplicateEmail = async (req, res, next) => {
  try {
    const user = User.findOne({ email: req.body.email });
    if (user) {
      res.status(400).send({
        state: 'failed',
        message: 'Email is already in use!',
      });
    }
    next();
  } catch (err) {
    res.status(500).send({
      state: 'failed',
      message: err,
    });
  }
};
