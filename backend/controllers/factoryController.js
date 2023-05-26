// Basic CRUD operations for all models
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
    console.log(err);
    res.status(500).json({
      status: 'Error',
    });
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
    console.log(err);
    res.status(500).json({
      status: 'Error',
    });
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
    console.log(err);
    res.status(500).json({
      status: 'Error',
    });
  }
};

exports.getUserByID = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.find({ _id: req.params.id });
    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'Error',
    });
  }
};
