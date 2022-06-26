const Office = require('../models/office')

module.exports.index = async (req,res)=>{
    const manuals = await Office.find({"by": "ANS", "category": "Requirements"})
    res.render('BCAA/ans/requirement', { manuals, page_name: "ans", sub_menu: "Requirements" })
}

module.exports.guidancematerials = async(req,res)=>{
    const materials = await Office.find({"by": "ANS", "category": "Guidance Materials"})
    res.render('BCAA/ans/guidance', { materials, page_name: "ans", sub_menu: "Guidance Materials" })
}

module.exports.forms = async(req,res)=>{
    const forms = await Office.find({"by": "ANS", "category": "Form"})
    res.render('BCAA/ans/forms', { forms, page_name: "ans", sub_menu: "Forms" })
}

module.exports.personnel = (req,res)=>{
    res.render('BCAA/ans/personnel', { page_name: "ans", sub_menu: "Personnel" })
}

module.exports.circular = async(req,res)=>{
    const forms = await Office.find({"by": "ANS", "category": "Circular"})
    res.render('BCAA/ans/circular', { forms, page_name: "ans", sub_menu: "Circulars" })
}