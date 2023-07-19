const express = require('express');
const routerWebsite = express.Router();
const {
       getAll,
       filterwebsite
 } = require('../controllers/website');


 routerWebsite.get('/getAll', getAll);
 routerWebsite.get('/Filter/:userId', filterwebsite);
module.exports = routerWebsite;
