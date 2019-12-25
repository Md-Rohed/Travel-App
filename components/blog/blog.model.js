'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var blogSchema = new Schema({
  title: String,
  description: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Blog', blogSchema)
