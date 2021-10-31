/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import { Tag, Divider, Spin, Pagination } from "antd";
import BlogCard from "../card";
import { getSentence } from "../../api/request";
import { ctx } from "../context";
import { getBlogListsByparameters } from "../../api/request";
import "./index.css";

export default function Blogs(props) {
  const scrollRaf = useRef();
  const { tag, keyword } = useContext(ctx);
  console.log("keyword", keyword);
  //spinning control(daily sentence)
  const [spin, setspin] = useState(false);
  const [dailyContent, setDaliyContent] = useState();
  const [dailyauthor, setdailyauthor] = useState();

  const [blogList, setblogList] = useState([]);
  const [blogSpin, setblogSpin] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const defaultPageSize = 4;
  const [total, setTotal] = useState(0);

  const handlePageChange = (page) => {
    console.log("page", page);
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

  useEffect(() => {
    setCurrentPage(1);
  }, [tag]);
  // get blogs by keyword,tag,page
  useEffect(() => {
    (async () => {
      setblogSpin(true);
      const blogs = await getBlogListsByparameters(keyword, tag, currentPage);
      const {
        data: { data, total },
      } = blogs;
      console.log("totoalPage", total);
      if (data) {
        setblogList(data);
        setTotal(total);
        setblogSpin(false);
      } else {
        setblogList([]);
        setblogSpin(false);
      }
    })();
  }, [keyword, tag, currentPage]);

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
        defaultPageSize={defaultPageSize}
        defaultCurrent={1}
        current={currentPage}
        total={total}
        onChange={handlePageChange}
      />
    </div>
  );
}
