const express = require('express')
const router = express.Router()
const bcaa = require('../controllers/bcaa')

router.get('/', bcaa.index)
router.get('/legislation', bcaa.leg)
router.get('/aboutus', bcaa.au)


module.exports = router;