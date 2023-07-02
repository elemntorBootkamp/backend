const express = require('express');
const router = express.Router();
const {
    getById,
    Add,
    getAll,
    Delete,
    Update,
} = require('../controllers/controler');

const{
    getWebsitesDetailsFromStorageAction
} = require('../controllers/websitesController');

//routing
router.post('/Add', Add);
router.get('/getById/:id', getById);
router.get('/getAll', getAll);
router.delete('/delete/:id', Delete);
router.put('/update', Update);
router.get('/websites', getWebsitesDetailsFromStorageAction);

module.exports = router;
