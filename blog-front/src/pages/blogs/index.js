import React from "react";
import { Tag, Divider } from "antd";
import BlogCard from "../card";
import "./index.css";
export default function Blogs() {
  return (
    <div>
      <div className="everyday">
        <Divider orientation="left">
          <Tag color="#87d068">Everyday Sentence:</Tag>
        </Divider>
        <p>每日一句</p>
        <p>yingwen</p>
      </div>
      <div className="card-list">
        <BlogCard></BlogCard>
      </div>
    </div>
  );
}
