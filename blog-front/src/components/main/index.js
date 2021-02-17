import React, { Component } from "react";
import "./index.css";
import { Tag, Divider } from "antd";
import BlogCard from "../../pages/card";
import RandomTags from "../../pages/randomtags";
export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="content-left">
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
        <div className="content-right">
          <div className="randomtag">
            <RandomTags></RandomTags>
          </div>
        </div>
      </div>
    );
  }
}
