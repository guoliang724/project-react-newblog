import React, { Component } from "react";
import { Input } from "antd";
import "./index.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  onSearch = () => {};
  render() {
    return (
      <div className="header">
        <ul className="header-nav">
          <li>
            <Link to="/home/">
              <p
                style={{
                  color: "rgb(0, 102, 255)",
                  width: 164,
                  height: 30,
                  fontSize: "2.5rem",
                }}
              >
                Liang's blog
              </p>
            </Link>
          </li>
          <li>
            <Link to="/home/">Home</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/home/about">About</Link>
          </li>
          <li>
            <Link to="/home/message">Message</Link>
          </li>
          <li>
            <Link to="/home/login">Login</Link>
          </li>
        </ul>
        <div className="searchbar">
          <Input.Search
            placeholder="keyword"
            enterButton="Search"
            size="middle"
            bordered={false}
            onSearch={this.onSearch}
          ></Input.Search>
        </div>
      </div>
    );
  }
}
