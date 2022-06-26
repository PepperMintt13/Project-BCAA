const express = require('express')
const router = express.Router()
const air = require('../controllers/air')

const catchAsync = require('../utils/catchAsync')

router.get('/', catchAsync(air.index))
router.get('/guidancematerials', catchAsync(air.guidancematerials))
router.get('/forms', catchAsync(air.forms))
router.get('/personnel', air.personnel)
router.get('/circular', catchAsync(air.circular))

module.exports = router;

