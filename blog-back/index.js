const express = require("express");
const app = express();
const path = require("path");
const blog = require("./routers/blog");
const login = require("./routers/user");
const comment = require("./routers/comment");
const upload = require("./routers/upload");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");

require("./models/init");

const staticPath = path.resolve(__dirname);

app.use(express.static(staticPath));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/blog", blog);
app.use("/login", login);
app.use("/upload", upload);
app.use("/comment", comment);
//handle error
app.use(errorHandler);
app.listen(5000, () => {
  console.log("port:5000 server is working....");
});
