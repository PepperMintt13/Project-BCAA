const Office = require('../models/office')

module.exports.index = async (req,res)=>{
    const manuals = await Office.find({"by": "Flight Operations", "category": "Requirements"})
    res.render('BCAA/flightoperations/requirement', { manuals, page_name: "flightoperations", sub_menu: "Requirements" })
}

module.exports.guidancematerials = async(req,res)=>{
    const materials = await Office.find({"by": "Flight Operations", "category": "Guidance Materials"})
    res.render('BCAA/flightoperations/guidance', { materials, page_name: "flightoperations", sub_menu: "Guidance Materials" })
}

module.exports.forms = async(req,res)=>{
    const forms = await Office.find({"by": "Flight Operations", "category": "Form"})
    res.render('BCAA/flightoperations/forms', { forms, page_name: "flightoperations", sub_menu: "Forms" })
}

module.exports.personnel = (req,res)=>{
    res.render('BCAA/flightoperations/personnel', { page_name: "flightoperations", sub_menu: "Personnel" })
}

module.exports.circular = async(req,res)=>{
    const forms = await Office.find({"by": "Flight Operations", "category": "Circular"})
    res.render('BCAA/flightoperations/circular', { forms, page_name: "flightoperations", sub_menu: "Circulars" })
}