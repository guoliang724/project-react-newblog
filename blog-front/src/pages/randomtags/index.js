import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { CloudTwoTone } from "@ant-design/icons";
export default function RandomTags() {
  return (
    <div className="randomtag">
      <div className="card-title">
        <span style={{ marginRight: 5 }}>Tag Cloud</span>
        <CloudTwoTone />
      </div>
      <div className="card-content">
        <Link to="">dsadsa</Link>
        <Link to="">dsadsa</Link>
        <Link to="">dsadsa</Link>
        <Link to="">dsadsa</Link>
      </div>
    </div>
  );
}
