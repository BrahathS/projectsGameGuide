const express = require('express');
const authController = require('../control/auth');

const route = express.Router();

route.post('/register', authController.register);
route.post('/login', authController.login);

module.exports = route;