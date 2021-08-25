import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Spin } from "antd";
import { HeartTwoTone, CommentOutlined } from "@ant-design/icons";
import covert from "../../utli/timecovert";
import CommentCom from "../../components/comment";
import { addLikes } from "../../api/request";
import "./index.css";

export default function BlogCard(props) {
  const [readMore, setReadMore] = useState(true);
  const [commentMore, setCommentMore] = useState(false);

  const [lists, setlists] = useState(props.list);
  var { id, title, views, content, createdAt, tags, img, likes } = props.blog;
  var { list, handleAddComment } = props;

  var newHtml = onlyShowText(content);
  //handle likes
  const [blogLiks, setblogLikes] = useState();
  const [clicked, setclicked] = useState(false);
  var date = covert(createdAt);

  var wrapup = readMore ? (
    <div className="card-content">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-text">
        <div
          className="card-text-para"
          dangerouslySetInnerHTML={{ __html: newHtml }}
        ></div>
        <button
          className="card-text-button"
          onClick={() => {
            setReadMore(false);
          }}
        >
          Read More
        </button>
      </div>
    </div>
  ) : (
    <div className="card-content">
      <div className="card-text">
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
        <button
          className="card-text-button"
          onClick={() => {
            setReadMore(true);
          }}
        >
          Wrap Up
        </button>
      </div>
    </div>
  );

  //initial the lists value
  useEffect(() => {
    setlists(list);
  }, [list]);

  //hanle likes
  useEffect(() => {
    console.log("ruuning");
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
        <div className="card-title">{title}</div>
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
            <HeartTwoTone twoToneColor="blue" />
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
        <span>{tags}</span>
        <button
          onClick={() => {
            setCommentMore(!commentMore);
          }}
        >
          <CommentOutlined />
          <span style={{ marginLeft: 3 }}>
            {commentMore ? "Wrap Up" : `${lists.length} Comments`}
          </span>
        </button>
      </div>
      <div style={{ display: commentMore ? "block" : "none" }}>
        <CommentCom
          lists={lists}
          handleAddComment={handleAddComment}
          article_id={id}
        />
      </div>
    </div>
  );
}

function onlyShowText(html) {
  var blackList = ["img", "video", "table", "code"];

  var blockString1 = blackList.map((item) => `(<${item})`).join("|");

  var reg = new RegExp(blockString1, "g");
  //console.log(reg);
  var newHtml = html.replace(reg, (a, b, c) => {
    console.log("a", a);

    return a + ` style="display:none" `;
  });
  return newHtml;
}
