const express = require('express')
const router = express.Router()
const portal = require('../controllers/portal')

const catchAsync = require('../utils/catchAsync')
const { validateOffice, isLoggedIn, isAuthor } = require('../middleware')

router.route('/')
    .get(isLoggedIn, catchAsync(portal.index))
    .post(isLoggedIn, validateOffice, catchAsync(portal.newPost))

router.get('/new', isLoggedIn, portal.newForm)

router.route('/:id')
    .get(isLoggedIn, catchAsync(portal.showPost))
    .put(isLoggedIn, isAuthor, validateOffice, catchAsync(portal.updatePost))
    .delete(isLoggedIn, isAuthor, catchAsync(portal.deletePost))

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(portal.editForm))


module.exports = router;