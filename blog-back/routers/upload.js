const express = require("express");
const router = express.Router();
const path = require("path");
const authen = require("../middleware/authHandler");
const multer = require("multer");

const uploadfolder = path.resolve(__dirname, "../public/upload");
const baseUrl = "http://localhost:5000/public/upload/";

/*configuration */
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadfolder);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});
// 50 mb maxium upload
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 50 * 1024,
  },
});
var uploadSingle = upload.single("pic");

router.post("/", (req, res) => {
  uploadSingle(req, res, async (err) => {
    if (err) {
      console.log(err);
      return res.send({
        status: 0,
        msg: "Upload File Failed!",
      });
    }
    var filename = req.file.filename;
    var url = baseUrl + filename;
    res.send({
      status: 1,
      data: {
        filename,
        url,
      },
    });
  });
});

module.exports = router;
