const express = require('express');
const authController = require('../control/auth');

const route = express.Router();

// route.get('/', authController.isLoggedIn, (req, res) => {
//   res.render('index', {
//     user: req.user
//   });
// });

route.get('/', (req, res) => {
  res.render('index');
});

route.get('/register', (req, res) => {
  res.render('register');
});

route.get('/login', (req, res) => {
  res.render('login');
});


module.exports = route;
