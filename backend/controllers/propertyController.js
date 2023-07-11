const Building = require('../models/adModels/propertyModels/buildingModel');
const Housing = require('../models/adModels/propertyModels/housingModel');
const Land = require('../models/adModels/propertyModels/landModel');
const Office = require('../models/adModels/propertyModels/officeModel');
const factoryHandler = require('./factoryController');

// !!!!!Add update controllers!!!!!!

// handler functions for buildings
exports.getAllBuildings = factoryHandler.getAll(Building);
exports.getBuildingByAdNum = factoryHandler.getByAdNum(Building);
exports.createBuildingListing = factoryHandler.create(Building);
exports.deleteBuildingListing = factoryHandler.deleteByAdNum(Building);

//handler functions for housing
exports.getAllHousing = factoryHandler.getAll(Housing);
exports.getHousingByAdNum = factoryHandler.getByAdNum(Housing);
exports.createHousingListing = factoryHandler.create(Housing);
exports.deleteHousingListing = factoryHandler.deleteByAdNum(Housing);

//handler functions for land
exports.getAllLand = factoryHandler.getAll(Land);
exports.getLandByAdNum = factoryHandler.getByAdNum(Land);
exports.createLandListing = factoryHandler.create(Land);
exports.deleteLandListing = factoryHandler.deleteByAdNum(Land);

//handler functions for office
exports.getAllOffice = factoryHandler.getAll(Office);
exports.getOfficeByAdNum = factoryHandler.getByAdNum(Office);
exports.createOfficeListing = factoryHandler.create(Office);
exports.deleteOfficeListing = factoryHandler.deleteByAdNum(Office);
