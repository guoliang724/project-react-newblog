const express = require("express");

const router = express.Router();
const Comment = require("../models/comment");
const getRandomPic = require("../utlis/getRandomPic");

router.post("/", async (req, res) => {
  const { article_id } = req.body;

  var result = await Comment.findAll({
    where: {
      article_id,
    },
  });
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
  try {
    var result = await Comment.create({
      author,
      content,
      article_id,
      children: [],
    });
    if (result) {
      res.send({
        status: 1,
        data: res,
      });
    }
  } catch {
    res.send({
      status: 0,
      data: null,
    });
  }
});

//add a new comment for aticle comment
router.post("/subadd", async (req, res) => {
  const { author, content, comment_id } = req.body;
  var previousComment = await Comment.findAll({
    attributes: ["children"],
    where: {
      id: comment_id,
    },
  });
  if (previousComment) {
    var previousChildren = JSON.parse(previousComment[0].dataValues.children);
    var createdAt = Date.now();
    var article_id = 0;
    var avatar = getRandomPic();
    var children = [
      ...previousChildren,
      { author, content, avatar, article_id, createdAt },
    ];

    console.log(children);
    var result = await Comment.update(
      { children },
      {
        where: {
          id: comment_id,
        },
      }
    );

    if (result) return res.send({ status: 1, data: result });
  }

  res.send({ status: 0, data: null });
});
module.exports = router;
