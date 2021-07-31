const express = require("express");

const router = express.Router();
const Comment = require("../models/comment");
const getRandomPic = require("../utlis/getRandomPic");

router.post("/", async (req, res) => {
  var result = await Comment.findAll();
  if (result) {
    res.send({
      status: 1,
      data: result,
    });
  } else {
    res.send({
      status: 0,
      data: null,
    });
  }
});
//add a new comment
router.post("/add", async (req, res) => {
  var { author, content, article_id } = req.body;
  console.log("article_id", article_id);
  var result = await Comment.create({
    author,
    content,
    article_id,
  });

  if (result) {
    res.send({
      status: 1,
      data: result,
    });
  }
});

module.exports = router;
