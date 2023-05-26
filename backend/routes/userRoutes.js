const express = require('express');
const UserController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// Basic user routes
router.route('/').get(UserController.getAllUsers);
router.route('/:id').get(UserController.getUserById);

// Sign-up routers
router.route('/signup').post(authController.signup);
//router.route('/login').post();

module.exports = router;
