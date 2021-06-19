import React from "react";
import "./index.css";
export default function InputComment() {
  return (
    <div className="input-comment">
      <div className="input-avatar">
        <img src="https://www.zh30.com/avatar/default.jpg" alt="" />
      </div>
      <div className="input-box">
        <textarea className="input-textarea"></textarea>
      </div>
      <button className="submit-button">submit</button>
    </div>
  );
}
