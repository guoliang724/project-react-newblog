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
      defaultValue: 0,
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
    createdAt: {
      type: DataTypes.STRING,
      defaultValue: Date.now(),
    },
  },
  {
    updatedAt: false,
    createdAt: false,
  }
);

module.exports = Blog;
