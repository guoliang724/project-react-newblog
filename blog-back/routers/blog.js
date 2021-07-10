const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
//get blog lists
router.get("/list", async (req, res) => {
  var blogs = await Blog.findAll();
  res.send({
    status: 1,
    data: blogs,
  });
});

//get a blog with id
router.get("/:id", async (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(JSON.stringify(req.body));
});

module.exports = router;
