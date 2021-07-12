const express = require("express");
const app = express();
const path = require("path");
const blog = require("./routers/blog");
const login = require("./routers/user");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
require("./models/init");

const staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/blog", blog);
app.use("/login", login);

//handle error
app.use(errorHandler);
app.listen(5000, () => {
  console.log("port:5000 server is working....");
});
