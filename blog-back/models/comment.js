const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const getRandomPic = require("../utlis/getRandomPic");

const Comment = sequelize.define(
  "Comment",
  {
    article_id: {
      type: DataTypes.INTEGER,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: getRandomPic(),
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    children: {
      type: DataTypes.TEXT,

      get() {
        return JSON.parse(this.getDataValue("children"));
      },
      set(val) {
        return this.setDataValue("children", JSON.stringify(val));
      },
    },
    createdAt: {
      type: DataTypes.STRING,
      default: Date.now(),
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = Comment;
