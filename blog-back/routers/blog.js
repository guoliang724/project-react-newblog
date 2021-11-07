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

// get blogs by keyword=>tag=>page
router.post("/list/parameter", async (req, res) => {
  const blogs = await Blog.findAll();
  let { keyword, tag, page } = req.body;
  const length = blogs.length;
  const defaultPageSize = 4;
  const totoalPage = Math.ceil(length / defaultPageSize);
  const keywordFilter = keyword
    ? blogs.filter((item) => item.content.includes(keyword))
    : blogs;

  const tagFilter =
    tag !== "all"
      ? keywordFilter.filter((item) => item.tags.includes(tag))
      : keywordFilter;
  const totalLength = tagFilter.length;

  if (page > totoalPage)
    return res.send({
      status: 0,
      data: null,
    });
  const pageFilter = tagFilter.slice(
    (page - 1) * defaultPageSize,
    page * defaultPageSize
  );

  if (pageFilter == [])
    return res.send({
      status: 0,
      data: null,
    });
  res.send({
    status: 1,
    data: pageFilter,
    total: totalLength,
  });
});

//get blog list by page
// router.get("/list:page", async (req, res) => {
//   var blogs = await Blog.findAll();
//   var page = req.params.page;
//   var number = 4;
//   var length = blogs.length;
//   var totoalPage = Math.ceil(length / number);
//   if (page > totoalPage) {
//     res.send({
//       status: 1,
//       data: null,
//     });
//   } else {
//     var volumns = blogs.slice(
//       (page - 1) * number,
//       (page - 1) * number + number
//     );
//     res.send({
//       status: 1,
//       data: volumns,
//     });
//   }
// });

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
    result = Array.from(new Set(result));
  }
  res.send(result);
});

//add one view on a blog
router.post("/addview", async (req, res) => {
  const { id } = req.body;
  const blog = await Blog.findOne({ where: { id } });
  const result = await blog.increment("views");
  res.send("good");
});

//get a blog with id
router.get("/:id", async (req, res) => {
  res.send(JSON.stringify(req.body));
});

module.exports = router;
