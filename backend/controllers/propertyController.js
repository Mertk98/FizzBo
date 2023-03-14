const Building = require('../models/adModels/propertyModels/buildingModel');
const factoryHandler = require('./factoryController');

exports.getAll = factoryHandler.getAll(Building);
exports.getByAdNum = factoryHandler.getByAdNum(Building);
exports.createListing = factoryHandler.createListing(Building);
