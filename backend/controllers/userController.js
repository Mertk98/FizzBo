const User = require('../models/userModels/userModel');
const factoryHandler = require('./factoryController');

// Basic Controllers for Users
// Possibly for admin use only!!!
exports.getAllUsers = factoryHandler.getAll(User);
exports.getUserById = factoryHandler.getByID(User);
exports.deleteUser = factoryHandler.delete(User);
