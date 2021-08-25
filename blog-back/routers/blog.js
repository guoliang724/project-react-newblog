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

//create a new blog
router.post("/new", async (req, res) => {
  const { content, title, tags, img } = req.body;
  const newblog = await Blog.create({
    title,
    content,
    tags,
    img,
  });

  if (newblog) {
    res.send({
      status: 1,
      data: newblog,
    });
  }
});

//add a like on one blog
router.post("/likes/add", async (req, res) => {
  const { id, likes } = req.body;
  const result = await Blog.update(
    { likes },
    {
      where: {
        id,
      },
    }
  );

  if (result) {
    res.send({
      status: 1,
      data: result,
    });
  }
});

//return tags list
router.get("/taglist", async (req, res) => {
  var result = await Blog.findAll({ attributes: ["tags"] });
  if (result) {
    result = result.map((item) => item["tags"]);
  }
  res.send(result);
});

//get a blog with tag
router.post("/withtag", async (req, res) => {
  const { tag } = req.body;
  const result = await Blog.findAll({
    where: {
      tags: tag,
    },
  });
  if (result) {
    res.send({
      status: 1,
      data: result,
    });
  }
});

//get a blog with id
router.get("/:id", async (req, res) => {
  res.send(JSON.stringify(req.body));
});

module.exports = router;
