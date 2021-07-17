import { Card, Avatar, h2 } from "antd";
import "./index.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";

export default class BlogCard extends Component {
  state = {
    imgUrl:
      "https://pic3.zhimg.com/v2-359aebda1a8d0c6f798a670a47db7c26_400x224.png",
    readMore: true,
  };
  componentDidMount = () => {};
  render() {
    var { title, views, content, createdAt, tags, id } = this.props.blog;
    var { readMore } = this.state;
    console.log("blog", this.props.blog);
    console.log("readmore", readMore);
    if (readMore) {
      return (
        <div className="blog-card">
          <Link
            to={{
              pathname: `/blog/${id}`,
              state: this.props.blog,
            }}
          >
            <div className="card-title">{title}</div>
          </Link>
          <div className="card-content">
            <div className="card-img">
              <img src={this.state.imgUrl} alt="" />
            </div>
            <div className="card-text">
              <p className="card-text-para">{content}</p>
              <button
                className="card-text-button"
                onClick={() => {
                  this.setState({
                    readMore: false,
                  });
                }}
              >
                Read More
              </button>
            </div>
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
    } else {
      return (
        <div className="blog-card">
          <div className="card-title">{title}</div>
          <div className="card-content">
            <div className="card-text">
              <p>{content}</p>
              <button
                className="card-text-button"
                onClick={() => {
                  this.setState({
                    readMore: true,
                  });
                }}
              >
                Wrap Up
              </button>
            </div>
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
}
