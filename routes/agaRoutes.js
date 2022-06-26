const express = require('express')
const router = express.Router()
const aga = require('../controllers/aga')

const catchAsync = require('../utils/catchAsync')

router.get('/', catchAsync(aga.index))
router.get('/guidancematerials', catchAsync(aga.guidancematerials))
router.get('/forms', catchAsync(aga.forms))
router.get('/personnel', aga.personnel)
router.get('/circular', catchAsync(aga.circular))

module.exports = router;


