const User = require('../models/user')

module.exports.registerForm = (req, res)=>{
    if (req.user.username === 'admin') {
        res.render('staff/register')
    } else {
        req.flash('error', 'Only admin can register a new user.')
        res.redirect('/bcaa/staffportal')
    }
}

module.exports.createUser = async (req,res)=>{
    try {
        const { email, username, section, password } = req.body
        const user = new User({email, username, section})
        const regUser = await User.register(user, password)
        req.login(regUser, err => {
            if (err) return next(err)
            req.flash('success', `You have been successfully registered. Welcome to Staffportal, ${user.username.toUpperCase()}!`)
            res.redirect('/bcaa/staffportal')
        })
    } catch(e) {
        req.flash('error', e.message)
        res.redirect('/bcaa/register')
    }
}

module.exports.loginForm = (req,res)=>{
    if (req.user) {
        res.redirect('/bcaa/staffportal')
    } else {
        res.render('staff/login')
    }
}

module.exports.loginUser = (req,res)=>{
    const { username } = req.body
    req.flash('success', `Welcome back, ${username.charAt(0).toUpperCase() + username.slice(1)}!`)
    res.redirect('/bcaa/staffportal')
}

module.exports.logoutUser = (req,res,next) => {
    req.logout(err=>{
        if (err) return next(err)
        req.flash('success', 'You have been successfully logged out.')
        res.redirect('/bcaa')    
    })
}