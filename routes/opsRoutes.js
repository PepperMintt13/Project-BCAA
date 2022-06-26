const express = require('express')
const router = express.Router()
const ops = require('../controllers/ops')

const catchAsync = require('../utils/catchAsync')

router.get('/', catchAsync(ops.index))
router.get('/guidancematerials', catchAsync(ops.guidancematerials))
router.get('/forms', catchAsync(ops.forms))
router.get('/personnel', ops.personnel)
router.get('/circular', catchAsync(ops.circular))

module.exports = router;



