const Office = require('../models/office')

module.exports.index = (req,res)=>{
    res.render('BCAA/home', { page_name: "home" })
}

module.exports.leg = async(req,res)=>{
    const manuals = await Office.find({"by": "BCAA", "category": "Legislations"})
    res.render('BCAA/legislation/act', { page_name: "legislation" })
}

module.exports.au = async(req,res)=>{
    res.render('BCAA/aboutus', { page_name: "aboutus" })
}

