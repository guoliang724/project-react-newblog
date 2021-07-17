import React from "react";
import PostInfo from "../postinfo";
import "./index.css";
export default function Blog(props) {
  const { title, views, content, createdAt, tags, id } =
    props.history.location.state;
  return (
    <div className="blog">
      <div className="blog-header">
        <h1>{title}</h1>
        <div className="postInfo">
          <PostInfo />
        </div>
      </div>
      <div className="blog-content">{content}</div>
      <div className="blog-related"></div>
    </div>
  );
}
