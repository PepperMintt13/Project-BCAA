const express = require('express')
const router = express.Router()
const ans = require('../controllers/ans')

const catchAsync = require('../utils/catchAsync')

router.get('/', catchAsync(ans.index))
router.get('/guidancematerials', catchAsync(ans.guidancematerials))
router.get('/forms', catchAsync(ans.forms))
router.get('/personnel', ans.personnel)
router.get('/circular', catchAsync(ans.circular))

module.exports = router;


