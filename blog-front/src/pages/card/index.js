import { Card, Avatar, h2 } from "antd";
import "./index.css";
import React, { Component } from "react";
import { HeartTwoTone } from "@ant-design/icons";

export default class BlogCard extends Component {
  state = {
    imgUrl:
      "https://pic3.zhimg.com/v2-359aebda1a8d0c6f798a670a47db7c26_400x224.png",
  };
  componentDidMount = () => {};
  render() {
    var { title, views, content, createdAt, tags } = this.props.blog;

    return (
      <div className="blog-card">
        <h2 className="card-title">{title}</h2>
        <div className="card-content">
          <div className="card-img">
            <img src={this.state.imgUrl} alt="" />
          </div>
          <div className="card-content">{content}</div>
        </div>
        <div className="card-action">
          <button className="thumb">
            <HeartTwoTone twoToneColor="#eb2f96" />
            <span style={{ marginLeft: "0.5rem" }}>{views}</span>
          </button>
          <span>{createdAt}</span>
          <span>{tags}</span>
        </div>
      </div>
    );
  }
}
