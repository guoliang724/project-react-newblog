import React from "react";
import "./index.css";
import { FireTwoTone } from "@ant-design/icons";
export default function Hot() {
  return (
    <div className="hot">
      <div className="hot-title">
        <span style={{ marginRight: 4 }}>Hot</span>
        <FireTwoTone twoToneColor="#eb2f96" />
      </div>
      <div className="hot-content">
        <p>dsadsa</p>
        <p>dsadsa</p>
        <p>dsadsa</p>
        <p>dsadsa</p>
      </div>
    </div>
  );
}
