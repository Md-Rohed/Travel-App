'use strict'

const Blog = require('./blog.model')
const utils = require('../../helpers/utils')

/**
 * Load user and append to req.
 */
async function load (req, res, next, id) {
  try{
    const blog = await Blog.get(id)
    req.blog = blog
    return next()
  } catch(error){
    if (!error) error = new Error('No blog found. Unespected Error')
    return next(error)
  }
}

/**
 * @name Get user
 * @returns {User}
 */
function get (req, res) {
  let blog = utils.successRequest(req.blog)
  return res.json(blog)
}

/**
 * Create new user
 * @property {Object} req.body - The user.
 * @returns {User}
 */
async function create (req, res, next) {
  const blog = new Blog(req.body)

  try {
    let savedBlog = await blog.save()
    savedBlog = utils.successRequest(savedBlog)
    return res.json(savedBlog)
  } catch(error){
    return next(error)
  }
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
async function list (req, res, next) {
  let limit = 50
  let skip = 0

  if (req.query && req.query.limit) limit = Number(req.query.limit)
  if (req.query && req.query.skip) skip = Number(req.query.skip)

  try{
    const blogs = await Blog.find({}, null, { limit, skip })
    let response = utils.successRequest(blogs)
    res.json(response)
  } catch(error){
    return next(error)
  }
}

async function myBlog (req, res, next) {
  let limit = 50
  let skip = 0
  console.log("*************myBlog********")
  if (req.query && req.query.limit) limit = Number(req.query.limit)
  if (req.query && req.query.skip) skip = Number(req.query.skip)
  console.log({author: req.userAuth.userId})
  try{
    const blogs = await Blog.find({author: req.userAuth.userId})
    let response = utils.successRequest(blogs)
    res.json(response)
  } catch(error){
    return next(error)
  }
}

/**
 * Delete user.
 * @returns {User}
 */
function remove (req, res, next) {
  const blog = req.blog
  blog.remove()
    .then(deletedBlog => {
      res.json(utils.successRequest(deletedBlog))
    })
    .catch(error => {
      return next(error)
    })
}

module.exports = { load, get, create, list, myBlog, remove }
