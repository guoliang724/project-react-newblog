import React from "react";
import "./index.css";
export default function CommentBox() {
  return (
    <div className="commentbox">
      <span className="avatar">
        <img src="https://www.zh30.com/avatar/default.jpg" alt="" />
      </span>
      <span className="avatarname">Julie</span>
      <span className="avatartime">10 days ago</span>
      <div className="avatarcontent">
        <span className="content">I like your blog</span>
        <span className="reply">
          <button>reply</button>
        </span>
      </div>
    </div>
  );
}
