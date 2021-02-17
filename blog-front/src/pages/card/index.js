import { Card, Avatar } from "antd";
import "./index.css";
import React, { Component } from "react";
const { Meta } = Card;

export default class BlogCard extends Component {
  render() {
    return (
      <div>
        <Card
          className="blogcard"
          cover={
            <img
              className="card-cover"
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          size="small"
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
        <p className="card-data">
          <span>Published: 2020-09-01 | </span>
          <span>Visited: 2002 | </span>
          <span>
            Tages: <a href="sss">dsad</a> <a href="sss">dsad</a>{" "}
          </span>
        </p>
      </div>
    );
  }
}
