import React, { useState, useEffect, useRef } from "react";
import { Tag, Divider, Spin } from "antd";
import BlogCard from "../card";
import "./index.css";
import {
  getSentence,
  getBlogList,
  getBlogListWithPage,
} from "../../api/request";
import {
  DownCircleTwoTone,
  SmileTwoTone,
  setTwoToneColor,
} from "@ant-design/icons";

setTwoToneColor("#06f");

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

  //page control
  const [page, setpage] = useState(1);

  //nodata indicator
  const [noData, setnoData] = useState(false);

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

    return clearInterval(timer);
  }, []);

  //get blog list information
  useEffect(() => {
    (async () => {
      setblogSpin(true);
      var result = await getBlogListWithPage(page);
      //var result = await getBlogList();
      if (result.data.status === 1) {
        //status==1 success
        var blogs = result.data.data;
        if (!blogs) {
          setnoData(true);
          setblogSpin(false);
          return;
        } //reach to the bottom, no more page
        setTimeout(() => {
          console.log(blogs);
          setblogList([...blogList, ...blogs]);
          setblogSpin(false);
        }, 2000);
      }
    })();
  }, [page]);

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
        {noData ? (
          <div style={{ textAlign: "center" }}>
            <SmileTwoTone
              twoToneColor="#06f"
              style={{ fontSize: "2.5rem", margin: "auto" }}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      {blogSpin || noData ? (
        ""
      ) : (
        <button
          className="nextButton"
          onClick={() => {
            setpage(page + 1);
            console.log("button-page", page);
          }}
        >
          <DownCircleTwoTone
            twoToneColor="#06f"
            style={{ fontSize: "2.5rem" }}
          />
        </button>
      )}
    </div>
  );
}
