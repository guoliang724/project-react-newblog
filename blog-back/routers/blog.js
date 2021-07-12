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

//get blog list by page
router.get("/list:page", async (req, res) => {
  var blogs = await Blog.findAll();
  var page = req.params.page;
  var number = 4;
  var length = blogs.length;
  var totoalPage = Math.ceil(length / number);
  if (page > totoalPage) {
    res.send({
      status: 1,
      data: null,
    });
  } else {
    var volumns = blogs.slice(
      (page - 1) * number,
      (page - 1) * number + number
    );
    res.send({
      status: 1,
      data: volumns,
    });
  }
});

//get a blog with id
router.get("/:id", async (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(JSON.stringify(req.body));
});

module.exports = router;
