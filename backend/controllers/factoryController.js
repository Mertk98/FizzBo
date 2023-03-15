exports.getAll = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.find();

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

exports.getByAdNum = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.find({ adNumber: req.params.adNumber });

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

exports.createListing = (Model) => async (req, res, next) => {
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
