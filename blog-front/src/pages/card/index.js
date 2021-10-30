import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Tag } from "antd";
import { HeartTwoTone, CommentOutlined } from "@ant-design/icons";
import timeCovert from "../../utli/timecovert";
import { addLikes } from "../../api/request";
import addclick from "../../utli/addclick";
import "./index.css";

export default function BlogCard(props) {
  var { id, title, views, content, createdAt, tags, img, likes } = props.blog;
  var newHtml = onlyShowText(content);

  const [blogLiks, setblogLikes] = useState();
  const [clicked, setclicked] = useState(false);
  var date = timeCovert(createdAt);

  var wrapup = (
    <div className="card-content">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-text">
        <div
          className="card-text-para"
          dangerouslySetInnerHTML={{ __html: newHtml }}
        ></div>
        <NavLink
          to={{
            pathname: `/blog/${id}`,
            state: props.blog,
          }}
        >
          <div
            className="card-text-button"
            onClick={() => {
              addclick(id);
            }}
          >
            Read More
          </div>
        </NavLink>
      </div>
    </div>
  );

  //hanle likes
  useEffect(() => {
    setblogLikes(likes);
  }, [likes]);

  const handleLikes = async (id, likes) => {
    const result = await addLikes(id, likes);
    if (result) {
      console.log("add success");
    }
  };
  return (
    <div className="blog-card">
      <NavLink
        to={{
          pathname: `/blog/${id}`,
          state: props.blog,
        }}
      >
        <div
          className="card-title"
          onClick={() => {
            addclick(id);
          }}
        >
          {title}
        </div>
      </NavLink>
      {wrapup}
      <div className="card-action">
        {!clicked ? (
          <button
            className="thumb"
            onClick={() => {
              handleLikes(id, likes + 1);
              setblogLikes(blogLiks + 1);
              setclicked(true);
            }}
          >
            <HeartTwoTone twoToneColor="#1890ff" />
            <span style={{ marginLeft: "0.5rem" }}>{blogLiks}</span>
          </button>
        ) : (
          <button
            className="thumb"
            onClick={() => {
              handleLikes(id, likes);
              setblogLikes(blogLiks - 1);
              setclicked(false);
            }}
          >
            <HeartTwoTone twoToneColor="#eb2f96" />
            <span style={{ marginLeft: "0.5rem" }}>{blogLiks}</span>
          </button>
        )}
        <span>{date}</span>
        <span>
          <Tag color="#bae7ff"> {tags}</Tag>
        </span>
      </div>
    </div>
  );
}

function onlyShowText(html) {
  var blackList = ["img", "video", "table", "code"];

  var blockString1 = blackList.map((item) => `(<${item})`).join("|");

  var reg = new RegExp(blockString1, "g");

  var newHtml = html.replace(reg, (a, b, c) => {
    return a + ` style="display:none" `;
  });
  return newHtml;
}
