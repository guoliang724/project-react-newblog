/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Tag, Divider, Spin, Pagination } from "antd";
import BlogCard from "../card";
import "./index.css";
import { getSentence } from "../../api/request";
import { setTwoToneColor } from "@ant-design/icons";
import moment from "moment";

setTwoToneColor("#06f");

export default function Blogs(props) {
  const scrollRaf = useRef();

  //spinning control(daily sentence)
  const [spin, setspin] = useState(false);
  const [dailyContent, setDaliyContent] = useState();
  const [dailyauthor, setdailyauthor] = useState();

  const [blogList, setblogList] = useState([]);
  const [blogSpin, setblogSpin] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyWord] = useState("");
  const [total, setTotal] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
  }, []);

  // get blogs

  //get blog list information with page
  // useEffect(() => {
  //   (async () => {
  //     if (props.tag) {
  //       const result = await getBlogwithTag(props.tag);
  //       setblogList(result.data.data);
  //       return;
  //     }
  //     setblogSpin(true);
  //     var result = await getBlogListWithPage(page);
  //     //var result = await getBlogList();
  //     if (result.data.status === 1) {
  //       //status==1 success
  //       var blogs = result.data.data;
  //       if (!blogs) {
  //         setnoData(true);
  //         setblogSpin(false);
  //         return;
  //       } //reach to the bottom, no more page

  //       setblogList([...blogList, ...blogs]);
  //       setblogSpin(false);
  //     }
  //   })();
  // }, [page, props.tag]);

  return (
    <div className="blog-area" ref={scrollRaf}>
      <div className="everyday">
        <Divider orientation="left">
          <Tag color="#06f">Daily Sentence:</Tag>
        </Divider>
        <Spin spinning={spin} className="forSpinning" />
        <p>{dailyContent}</p>
        <div style={{ marginLeft: 30 }}>
          &nbsp;&nbsp;{dailyauthor ? `-- ${dailyauthor}` : ""}
        </div>
      </div>
      <div className="card-list">
        {blogList.map((blog, index) => {
          return <BlogCard key={index} blog={blog}></BlogCard>;
        })}
        <Spin size="large" className="loading" spinning={blogSpin} />
      </div>
      <Pagination
        defaultPageSize={4}
        defaultCurrent={1}
        current={currentPage}
        total={30}
        onChange={handlePageChange}
      />
    </div>
  );
}
