const express = require('express');
const router = express.Router();
const {
    search,
    websites,
    getById,
    Add,
    getAll,
    Delete,
    Update,
} = require('../controllers/controler');

//routing
router.get('/search/:userName', search);
//router.get('/search/:userName/:websiteName', search);
router.get('/websites', websites);
router.post('/Add', Add);
router.get('/getById/:id', getById);
router.get('/getAll', getAll);
router.delete('/delete/:id', Delete);
router.put('/update', Update);

module.exports = router;
