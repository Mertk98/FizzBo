const catchAsync = require('../utils/catchAsync');

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find();

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getByAdNum = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find(req.params.adNumber);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.createListing = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });
