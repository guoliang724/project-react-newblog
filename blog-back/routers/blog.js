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
router.get("/list/:keyword/:tag/:page", async (req, res) => {
  const blogs = await Blog.findAll();
  let { keyword, tag, page } = req.params;
  const length = blogs.length;
  const defaultPageSize = 4;
  const totoalPage = Math.ceil(length / defaultPageSize);
  const keywordFilter = keyword
    ? blogs.filter((item) => item.content.includes(keyword))
    : blogs;

  const tagFilter = tag
    ? keywordFilter.filter((item) => item.tags.includes(tag))
    : keywordFilter;

  if (page > totoalPage)
    return res.send({
      status: 1,
      data: null,
    });
  const pageFilter = tagFilter.slice(
    (page - 1) * defaultPageSize,
    page * defaultPageSize
  );
  res.send({
    status: 1,
    data: pageFilter,
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
  }
  res.send(result);
});

//get a blog with tag
// router.post("/withtag", async (req, res) => {
//   const { tag } = req.body;
//   const result = await Blog.findAll({
//     where: {
//       tags: tag,
//     },
//   });
//   if (result) {
//     res.send({
//       status: 1,
//       data: result,
//     });
//   }
// });

//add one view on a blog
router.post("/addview", async (req, res) => {
  const { id } = req.body;
  const blog = await Blog.findOne({ where: { id } });
  const result = blog.increment("views");
  console.log(result);
  res.send("good");
});

//get a blog with id
router.get("/:id", async (req, res) => {
  res.send(JSON.stringify(req.body));
});

module.exports = router;
