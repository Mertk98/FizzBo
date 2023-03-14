const express = require('express');
const propertyController = require('../controllers/propertyController.js');

const router = express.Router();

router
  .route('/building')
  .get(propertyController.getAll)
  .post(propertyController.createListing);

module.exports = router;
