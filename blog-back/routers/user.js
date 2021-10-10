const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("../utlis/wjt");
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  var result = await User.findAll({
    where: {
      username,
      password,
    },
  });
  if (result.length === 0) {
    res.send({
      status: 0,
      data: null,
    });
  } else {
    jwt.publish(res, 3600 * 24 * 30, { username });
  }
});

module.exports = router;
