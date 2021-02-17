import React, { Component } from "react";
import { Input } from "antd";
import "./index.css";

export default class Header extends Component {
  onSearch = () => {};
  render() {
    return (
      <div className="header">
        <ul className="header-nav">
          <li>Liang'blog | Tech blogs</li>
          <li>Home</li>
          <li>Map</li>
          <li>About</li>
          <li>Message</li>
        </ul>
        <div className="searchbar">
          <Input.Search
            placeholder="keyword"
            enterButton="Search"
            soze="large"
            onSearch={this.onSearch}
          ></Input.Search>
        </div>
      </div>
    );
  }
}
