import React, { useState, useEffect } from "react";
import { Tag, Divider } from "antd";
import BlogCard from "../card";
import "./index.css";
import { getSentence } from "../../api/blog";
export default function Blogs() {
  //daily content
  const [dailyContent, setDaliyContent] = useState();
  const [dailyauthor, setdailyauthor] = useState();
  //daily
  useEffect(() => {
    async function updateEachHour() {
      var result = await getSentence();
      console.log("result", result);
      var { forward, words_info } = result.data.data.content_list[0];
      setDaliyContent(forward);
      setdailyauthor(words_info);
      console.log(result.data.data.content_list[0]);
    }
    updateEachHour();

    var timer = setInterval(updateEachHour, 1000 * 6 * 60); //update each hour
    return clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="everyday">
        <Divider orientation="left">
          <Tag color="#87d068">Daily Sentence:</Tag>
        </Divider>
        <p>{dailyContent}</p>
        <div style={{ marginLeft: 30 }}>--&nbsp;&nbsp;{dailyauthor}</div>
      </div>
      <div className="card-list">
        <BlogCard></BlogCard>
      </div>
    </div>
  );
}
