require("./blog");
require("./user");
const sequelize = require("./db");

//initialize models at once
sequelize.sync({ alter: true }).then(() => {
  console.log("all modules are set up");
});
