const Office = require('../models/office')

module.exports.index = async(req,res)=>{
    if (req.user.username === 'admin') {
        const offices = await Office.find({}).sort({"postDate": -1})
        const num = await Office.count({})
        res.render('staff/home', { offices, num })
    } else {
        const offices = await Office.find({"by": req.user.section}).sort({"postDate": -1})
        const num = await Office.count({"by": req.user.section})
        res.render('staff/home', { offices, num })
    }
}

module.exports.newForm = (req,res)=>{
    res.render('staff/new')
}

module.exports.showPost = async(req,res)=>{
    const office = await Office.findById(req.params.id)
    if (!office) {
        req.flash('error', 'This post does not exist')
        return res.redirect('/bcaa/staffportal')
    }
    res.render('staff/show', { office })
}

module.exports.editForm = async(req,res)=>{
    const office = await Office.findById(req.params.id)
    if (!office) {
        req.flash('error', 'This post does not exist')
        return res.redirect('/bcaa/staffportal')
    }
    res.render('staff/edit', { office })
}

module.exports.updatePost = async(req,res)=>{
    const office = await Office.findByIdAndUpdate(req.params.id, req.body.office)
    office.by = req.user.section
    await office.save()
    req.flash('success', 'Successfully updated the post')
    res.redirect(`/bcaa/staffportal/${office._id}`)
}

module.exports.newPost = async (req,res)=>{
    const office = new Office(req.body.office)
    office.by = req.user.section
    await office.save()
    req.flash('success', 'Successfully created a new post')
    res.redirect('/bcaa/staffportal')
}

module.exports.deletePost = async (req,res)=>{
    await Office.findByIdAndDelete(req.params.id)
    req.flash('success', 'Successfully deleted a post')
    res.redirect('/bcaa/staffportal')

}