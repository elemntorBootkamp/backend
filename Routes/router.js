const express = require('express')
const router = express.Router()
const { getById, Add, getAll, Delete,Update } = require('../controllers/controler')

//routing
router.post('/Add', Add)
router.get('/getById/:id', getById)
router.get('/getAll', getAll)
router.delete('/delete/:id', Delete)
router.put('/update/my', Update)

module.exports = router