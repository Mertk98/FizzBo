const AppError = require('../utils/appError.js');

// Basic CRUD operations for all models
exports.getAll = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.find();

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getByAdNum = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findOne({ adNumber: req.params.adNumber });

    if (!doc) {
      return next(
        new AppError("Can't find a result with that ad number!", 404)
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getByID = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      return next(new AppError("Can't find a result with that id!", 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.create = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (err) {
    next(err);
  }
};

// Delete the documents by their id
exports.delete = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("Can't find a result with that id!"));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

// Delete the propery by ad number
exports.deleteByAdNum = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findOneAndDelete({ adNumber: req.params.adNumber });

    if (!doc) {
      return next(new AppError("Can't find an ad with that ad number!", 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
