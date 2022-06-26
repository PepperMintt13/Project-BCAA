const Office = require('../models/office')

module.exports.index = async (req,res)=>{
    const manuals = await Office.find({"by": "Aerodrome", "category": "Requirements"})
    res.render('BCAA/aerodrome/requirement', { manuals, page_name: "aerodrome", sub_menu: "Requirements" })
}

module.exports.guidancematerials = async(req,res)=>{
    const materials = await Office.find({"by": "Aerodrome", "category": "Guidance Materials"})
    res.render('BCAA/aerodrome/guidance', { materials, page_name: "aerodrome", sub_menu: "Guidance Materials" })
}

module.exports.forms = async(req,res)=>{
    const forms = await Office.find({"by": "Aerodrome", "category": "Form"})
    res.render('BCAA/aerodrome/forms', { forms, page_name: "aerodrome", sub_menu: "Forms" })
}

module.exports.personnel = (req,res)=>{
    res.render('BCAA/aerodrome/personnel', { page_name: "aerodrome", sub_menu: "Personnel" })
}

module.exports.circular = async(req,res)=>{
    const forms = await Office.find({"by": "Aerodrome", "category": "Circular"})
    res.render('BCAA/aerodrome/circular', { forms, page_name: "aerodrome", sub_menu: "Circulars" })
}