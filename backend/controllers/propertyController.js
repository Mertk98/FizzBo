const Building = require('../models/adModels/propertyModels/buildingModel');
const Housing = require('../models/adModels/propertyModels/housingModel');

const factoryHandler = require('./factoryController');

// handler functions for buildings
exports.getAllBuildings = factoryHandler.getAll(Building);
exports.getBuildingByAdNum = factoryHandler.getByAdNum(Building);
exports.createBuildingListing = factoryHandler.createListing(Building);

//handler functions for housing
exports.getAllHousing = factoryHandler.getAll(Housing);
exports.getHousingByAdNum = factoryHandler.getByAdNum(Housing);
exports.createHousingListing = factoryHandler.createListing(Housing);
