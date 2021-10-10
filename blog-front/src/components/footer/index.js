import React, { Component } from "react";
import "./index.css";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <span>
            <MailOutlined /> Email:zhangguoliang@cvte.com
          </span>
          <span>
            <PhoneOutlined /> Phone:15903410831
          </span>
        </div>
      </div>
    );
  }
}
