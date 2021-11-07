const { Sequelize } = require("sequelize");
const config = require("config");

const sequelize = new Sequelize(
  "project_blog",
  config.get("User.username"),
  config.get("User.password"),
  {
    host: config.get("User.host"),
    dialect: "mysql",
    logging: null,
  }
);

module.exports = sequelize;
//test
/*
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
*/

// h-;.krn1:quC
