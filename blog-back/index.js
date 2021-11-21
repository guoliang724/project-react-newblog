const express = require("express");
const app = express();
const path = require("path");
const blog = require("./routers/blog");
const login = require("./routers/user");
const comment = require("./routers/comment");
const upload = require("./routers/upload");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("./models/init");

const staticPath = path.resolve(__dirname);

app.use(express.static(staticPath));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use("/api/blog", blog);
app.use("/api/login", login);
app.use("/api/upload", upload);
app.use("/api/comment", comment);
//handle error
app.use(errorHandler);
app.listen(6000, () => {
  console.log("port:6000 server is working....");
});

