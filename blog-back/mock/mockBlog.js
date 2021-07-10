const Mock = require("mockjs");

const result = Mock.mock({
  "datas|13": [
    {
      "id|+1": 7,
      title: "@title",
      createdAt: "@date",
      content: "@cparagraph(3,5)",
      "views|1-100": 100,
      "tags|1-3": "@word(3,5)",
      "likes|1-100": 100,
    },
  ],
}).datas;

console.log(result);
const Blog = require("../models/blog");
Blog.bulkCreate(result);
