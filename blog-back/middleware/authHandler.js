const e = require("express");
const jwt = require("../utlis/wjt");

module.exports = (req, res, next) => {
  const result = jwt.verify(req);
  if (result) {
    req.username = result.username;
    next();
  } else {
    res.send({
      status: 0,
      msg: "no auth",
    });
  }
};
