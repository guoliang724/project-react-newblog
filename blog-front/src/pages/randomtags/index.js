import React, { useEffect, useState, useContext } from "react";
import { ctx } from "../context";
import "./index.css";
import { Tag } from "antd";
import { TagsTwoTone } from "@ant-design/icons";
import { getTags } from "../../api/request";
export default function RandomTags() {
  var { handleTag, handleAllTag } = useContext(ctx);

  const [tags, settags] = useState([]);
  useEffect(() => {
    (async () => {
      var result = await getTags();
      if (result) {
        settags(result.data);
      }
    })();
  }, []);
  var taglist = tags.map((item, index) => (
    <Tag
      className="taglist"
      key={index}
      color={`${RandomColor()}`}
      onClick={() => {
        handleTag(item);
      }}
    >
      <span style={{ color: "black" }}>{item}</span>
    </Tag>
  ));

  return (
    <div className="randomtag">
      <div className="card-title">
        <span style={{ marginRight: 5 }}>Tags</span>
        <TagsTwoTone />
      </div>
      <div className="card-content">
        <Tag color="success" className="taglist" onClick={handleAllTag}>
          All
        </Tag>
        {taglist}
      </div>
    </div>
  );
}

function RandomColor() {
  var red = Math.random() * 255 + 50;
  var yellow = Math.random() * 255 + 50;
  var blue = Math.random() * 255 + 50;
  return `rgb(${red},${yellow},${blue})`;
}
