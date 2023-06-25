const express = require('express');
const router = express.Router();
const {
    getById,
    Add,
    getAll,
    Delete,
    Update,
} = require('../controllers/controler');

const {
    getAllWebsites
} = require('../controllers/websitesController')


//routing
router.post('/Add', Add);
router.get('/getById/:id', getById);
router.get('/getAll', getAll);
router.delete('/delete/:id', Delete);
router.put('/update/my', Update);
router.get('/getAllWebsites', getAllWebsites)
module.exports = router;
