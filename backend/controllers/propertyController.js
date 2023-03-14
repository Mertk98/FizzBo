const Building = require('../models/adModels/propertyModels/buildingModel');

exports.getAll = async (req, res, next) => {
  try {
    const buildings = await Building.find();

    res.status(200).json({
      status: 'success',
      results: buildings.length,
      data: {
        data: buildings,
      },
    });
  } catch (err) {
    next();
  }
};

exports.createListing = async (req, res, next) => {
  try {
    const building = await Building.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: building,
      },
    });
  } catch (err) {
    next();
  }
};
