const Joi = require('joi')

module.exports.officeSchema = Joi.object({
    office: Joi.object({
        postDate: Joi.date().required(),
        category: Joi.string().required(),
        title: Joi.string().required(),
        by: Joi.string().optional().allow(''),
        details: Joi.string().optional().allow(''),
        revision: Joi.string().optional().allow(''),
        image: Joi.string().optional().allow(''),
        attachment: Joi.string().optional().allow('')
    }).required()
})