import React, { useState, useEffect, useRef } from "react";
import { Tag, Divider, Spin } from "antd";
import BlogCard from "../card";
import "./index.css";
import {
  getSentence,
  getBlogList,
  getBlogwithTag,
  getBlogListWithPage,
  getComments,
} from "../../api/request";
import {
  DownCircleTwoTone,
  SmileTwoTone,
  setTwoToneColor,
} from "@ant-design/icons";

setTwoToneColor("#06f");

export default function Blogs(props) {
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

  //comments lists
  const [commentList, setCommentList] = useState([]);
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

  //get blog list information with page
  useEffect(() => {
    (async () => {
      if (props.tag) {
        const result = await getBlogwithTag(props.tag);
        setblogList(result.data.data);
        return;
      }
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

        setblogList([...blogList, ...blogs]);
        setblogSpin(false);
      }
    })();
  }, [page, props.tag]);

  //get blog comments
  useEffect(() => {
    (async () => {
      var result = await getComments();
      setCommentList(result.data.data);
    })();
  }, []);

  const handleAddComment = (value) => {
    setCommentList([...commentList, value]);
  };

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
          var list =
            commentList &&
            commentList.filter((item) => item.article_id === blog.id);

          return (
            <BlogCard
              key={index}
              blog={blog}
              list={list}
              handleAddComment={handleAddComment}
            ></BlogCard>
          );
        })}

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
