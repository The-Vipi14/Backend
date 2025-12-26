const express = require('express');
const {allUser} = require('../controller/userController.js');
const Router = express.Router();

Router.get('/all', allUser);

module.exports = Router;

