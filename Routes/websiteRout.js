const express = require('express');
const websiterout = express.Router();
const { update } = require('../controllers/websitController');

websiterout.put('/update', update);
module.exports = websiterout;
