const Office = require('../models/office')

module.exports.index = async (req,res)=>{
    const manuals = await Office.find({"by": "Security", "category": "Requirements"})
    res.render('BCAA/security/requirement', { manuals, page_name: "security", sub_menu: "Requirements" })
}

module.exports.guidancematerials = async(req,res)=>{
    const materials = await Office.find({"by": "Security", "category": "Guidance Materials"})
    res.render('BCAA/security/guidance', { materials, page_name: "security", sub_menu: "Guidance Materials" })
}

module.exports.forms = async(req,res)=>{
    const forms = await Office.find({"by": "Security", "category": "Form"})
    res.render('BCAA/security/forms', { forms, page_name: "security", sub_menu: "Forms" })
}

module.exports.personnel = (req,res)=>{
    res.render('BCAA/security/personnel', { page_name: "security", sub_menu: "Personnel" })
}

module.exports.circular = async(req,res)=>{
    const forms = await Office.find({"by": "Security", "category": "Circular"})
    res.render('BCAA/security/circular', { forms, page_name: "security", sub_menu: "Circulars" })
}