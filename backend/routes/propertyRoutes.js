const express = require('express');
const propertyController = require('../controllers/propertyController.js');

const router = express.Router();

// Routers for buildings
router
  .route('/building')
  .get(propertyController.getAllBuildings)
  .post(propertyController.createBuildingListing);

router.route('/building/:adNumber').get(propertyController.getBuildingByAdNum);

// Routers for houses and apartments
router
  .route('/housing')
  .get(propertyController.getAllHousing)
  .post(propertyController.createHousingListing);

router.route('/housing/:adNumber').get(propertyController.getHousingByAdNum);

module.exports = router;
