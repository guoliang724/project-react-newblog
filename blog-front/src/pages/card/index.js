import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Spin } from "antd";
import { HeartTwoTone, CommentOutlined } from "@ant-design/icons";
import covert from "../../utli/timecovert";
import CommentList from "../../utli/commentList";
import "./index.css";
import InputComment from "../inputcomment";

export default function BlogCard(props) {
  const [readMore, setReadMore] = useState(true);
  const [commentMore, setCommentMore] = useState(false);
  const [loading, setloading] = useState(false);

  var { id, title, views, content, createdAt, tags, img } = props.blog;

  var date = covert(createdAt);
  var wrapup = readMore ? (
    <div className="card-content">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-text">
        <div
          className="card-text-para"
          dangerouslySetInnerHTML={{ __html: content }}
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
  var list = CommentList(id);
  var commentsNumber = list.props.dataSource.length;
  var commentsMore = commentMore ? list : "";
  const handleFold = (value) => {
    setloading(value);
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
        <button className="thumb">
          <HeartTwoTone twoToneColor="#eb2f96" />
          <span style={{ marginLeft: "0.5rem" }}>{views}</span>
        </button>
        <span>{date}</span>
        <span>{tags}</span>
        <button
          onClick={() => {
            setCommentMore(!commentMore);
          }}
        >
          <CommentOutlined />
          <span style={{ marginLeft: 3 }}>
            {commentMore ? "Wrap Up" : `${commentsNumber} Comments`}
          </span>
        </button>
      </div>
      <Spin spinning={loading}>{commentsMore}</Spin>

      {commentMore ? (
        <InputComment
          toAuthor="guoliang"
          comment_id={0}
          article_id={id}
          handleFold={handleFold}
        ></InputComment>
      ) : (
        ""
      )}
    </div>
  );
}
