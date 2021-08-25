import React from "react";
import "./index.css";
export default function PostInfo(props) {
  return (
    <div className="postInfo">
      <span>{props.date}</span>
      <span>{"·"}</span>
      <span>{`${props.readingTime} min read`}</span>
      <span>{"·"}</span>
      <span>{`5 views`}</span>
      <span>{"·"}</span>
      <span>{props.tags}</span>
    </div>
  );
}
