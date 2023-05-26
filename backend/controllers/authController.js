const User = require('../models/userModels/userModel');

exports.signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      state: 'success',
      data: {
        user: user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      state: 'failure',
    });
  }
};
