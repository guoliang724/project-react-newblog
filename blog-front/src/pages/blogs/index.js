import React, { useState, useEffect, useRef } from "react";
import { Tag, Divider, Spin } from "antd";
import BlogCard from "../card";
import "./index.css";
import { getSentence, getBlogList } from "../../api/request";

export default function Blogs() {
  const scrollRaf = useRef();
  //daily content
  const [dailyContent, setDaliyContent] = useState();
  const [dailyauthor, setdailyauthor] = useState();

  //bloglist information
  const [blogList, setblogList] = useState([]);

  //spinning control(daily sentence)
  const [spin, setspin] = useState(false);

  //spinning control(blog list)
  const [blogSpin, setblogSpin] = useState(false);

  //controlling scroll
  function controlScroll() {
    if (scrollRaf.current.scrollHeight) {
      var distance =
        scrollRaf.current.scrollHeight -
        document.documentElement.scrollTop -
        document.documentElement.clientHeight;
      console.log("distance", distance);
    }
  }

  //daily update
  useEffect(() => {
    async function updateEachHour() {
      setspin(true);
      var result = await getSentence();

      var { forward, words_info } = result.data.data.content_list[0];
      setspin(false);
      setDaliyContent(forward);
      setdailyauthor(words_info);
    }
    updateEachHour();
    var timer = setInterval(updateEachHour, 1000 * 6 * 60); //update each hour
    window.addEventListener("scroll", controlScroll);
    return clearInterval(timer);
  }, []);

  //get blog list information
  useEffect(() => {
    (async () => {
      var result = await getBlogList();

      if (result.data.status === 1) {
        //status==1 success
        var blogs = result.data.data;

        setblogList(blogs);
      }
    })();
  }, []);

  return (
    <div className="blog-area" ref={scrollRaf}>
      <div className="everyday">
        <Divider orientation="left">
          <Tag color="#87d068">Daily Sentence:</Tag>
        </Divider>
        <Spin spinning={spin} className="forSpinning" />
        <p>{dailyContent}</p>
        <div style={{ marginLeft: 30 }}>
          &nbsp;&nbsp;{dailyauthor ? `-- ${dailyauthor}` : ""}
        </div>
      </div>
      <div className="card-list">
        {blogList.map((blog, index) => (
          <BlogCard key={index} blog={blog}></BlogCard>
        ))}

        <Spin size="large" className="loading" spinning={blogSpin} />
      </div>
    </div>
  );
}
