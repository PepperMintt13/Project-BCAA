const ExpressError = require('./utils/ExpressError')
const { officeSchema } = require('./schemas');
const Office = require('./models/office');

module.exports.validateOffice = (req,res,next) => {
    const { error } = officeSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

module.exports.isLoggedIn = (req,res,next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You must sign in first!')
        return res.redirect('/bcaa/login')
    }
    next()
}

module.exports.isAuthor = async (req,res,next) => {
    const { id } = req.params
    const office = await Office.findById(id)
    if (office.by !== req.user.section) {
        req.flash('error', 'You do not have the permission to edit this post.')
        res.redirect(`/bcaa/staffportal/${office._id}`)
    }
    next()
}