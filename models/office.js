const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OfficeSchema = new Schema({
    by: String,
    category: String,
    postDate: String,
    title: String,
    details: String,
    image: String,
    attachment: String,
    revision: String
})

module.exports = mongoose.model('Office', OfficeSchema)