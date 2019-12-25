"use strict";

const express = require("express");
const router = express.Router();
const validate = require("express-validation");
const paramValidation = require("../../config/param-validation");
const blogCtrl = require("./blog.controller");
const authCtrl = require("../auth/auth.controller");

router
  .route("/")
  // GET /api/blog - Get list of all blogs
  .get(authCtrl.ensureAuth, blogCtrl.list)

  // POST /api/blog - Create new blog
  .post(validate(paramValidation.createBlog), blogCtrl.create);

router
  .route("/my-blog")
  // GET /api/blog - Get list of all blogs
  .get(authCtrl.ensureAuth, blogCtrl.myBlog);

router
  .route("/:blogId")
  // GET /api/blog/:blogId - Get blog
  .get(blogCtrl.get)

  // DELETE /api/blog/:blogId - Delete blog
  .delete(authCtrl.ensureAuth, authCtrl.ensurePermissions, blogCtrl.remove);

// Load user when API with userId route parameter is hit
router.param(
  "blogId",
  authCtrl.ensureAuth,
  authCtrl.ensurePermissions,
  blogCtrl.load
);

module.exports = router;
