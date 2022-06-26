const express = require('express')
const router = express.Router()
const sec = require('../controllers/sec')

const catchAsync = require('../utils/catchAsync')

router.get('/', catchAsync(sec.index))
router.get('/guidancematerials', catchAsync(sec.guidancematerials))
router.get('/forms', catchAsync(sec.forms))
router.get('/personnel', sec.personnel)
router.get('/circular', catchAsync(sec.circular))

module.exports = router;