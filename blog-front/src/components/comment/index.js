import React from "react";
import { Divider } from "antd";
import CommentBox from "../../pages/commentbox";
export default function CommentList() {
  return (
    <div className="commentlist">
      <Divider>x Replies</Divider>
      <div className="messagebox">
        <CommentBox></CommentBox>
      </div>
    </div>
  );
}
