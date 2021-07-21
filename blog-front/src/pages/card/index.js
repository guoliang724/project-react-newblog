import { Card, Avatar, h2 } from "antd";
import "./index.css";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";

export default class BlogCard extends Component {
  state = {
    readMore: true,
  };
  componentDidMount = () => {};
  render() {
    var { title, views, content, createdAt, tags, id, img } = this.props.blog;
    var { readMore } = this.state;

    if (readMore) {
      return (
        <div className="blog-card">
          <NavLink
            to={{
              pathname: `/blog/${id}`,
              state: this.props.blog,
            }}
          >
            <div className="card-title">{title}</div>
          </NavLink>
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
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
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
