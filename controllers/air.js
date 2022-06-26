const Office = require('../models/office')

module.exports.index = async (req,res)=>{
    const requirements = await Office.find({"by": "Airworthiness", "category": "Requirements"})
    res.render('BCAA/airworthiness/requirement', { requirements, page_name: "airworthiness", sub_menu: "Requirements" })
}

module.exports.guidancematerials = async(req,res)=>{
    const materials = await Office.find({"by": "Airworthiness", "category": "Guidance Materials"})
    res.render('BCAA/airworthiness/guidance', { materials, page_name: "airworthiness", sub_menu: "Guidance Materials" })
}

module.exports.forms = async(req,res)=>{
    const forms = await Office.find({"by": "Airworthiness", "category": "Form"})
    res.render('BCAA/airworthiness/forms', { forms, page_name: "airworthiness", sub_menu: "Forms" })
}

module.exports.personnel = (req,res)=>{
    res.render('BCAA/airworthiness/personnel', { page_name: "airworthiness", sub_menu: "Personnel" })
}

module.exports.circular = async(req,res)=>{
    const forms = await Office.find({"by": "Airworthiness", "category": "Circular"})
    res.render('BCAA/airworthiness/circular', { forms, page_name: "airworthiness", sub_menu: "Circulars" })
}