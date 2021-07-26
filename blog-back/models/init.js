require("./blog");
require("./user");
require("./comment");
const sequelize = require("./db");

//initialize models at once
sequelize.sync({ alter: true }).then(() => {
  console.log("all modules are set up");
});
