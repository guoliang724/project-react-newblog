const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Blog = sequelize.define(
  "Blog",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  {
    updatedAt: false,
  }
);

module.exports = Blog;
