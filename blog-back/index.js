const express = require("express");
const app = express();
const path = require("path");
const blog = require("./routers/blog");
require("./models/init");
const staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));

app.use("/blog", blog);

app.listen(5000, () => {
  console.log("port:5000 server is working....");
});
