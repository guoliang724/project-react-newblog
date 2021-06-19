const { Sequelize } = require("sequelize");
const config = require("config");

const sequelize = new Sequelize(
  "my_blog",
  config.get("User.username"),
  config.get("User.password"),
  {
    host: config.get("User.host"),
    dialect: "mysql",
  }
);
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
