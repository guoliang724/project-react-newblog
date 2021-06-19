const express = require("express");
const router = express.Router();

//get a blog with id
router.get("/:id", async (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(JSON.stringify(req.body));
});

module.exports = router;
