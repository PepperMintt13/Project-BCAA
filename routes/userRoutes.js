const express = require('express')
const router = express.Router()
const catchAsync = require('../utils/catchAsync')
const passport = require('passport')
const { isLoggedIn } = require('../middleware')

const user = require('../controllers/user')

router.route('/bcaa/register')
    .get(isLoggedIn, user.registerForm)
    .post(catchAsync(user.createUser))


router.route('/bcaa/login')
    .get(user.loginForm)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/bcaa/login' }), user.loginUser)

router.get('/bcaa/logout', user.logoutUser)

module.exports = router