import React, { useState, useEffect } from "react";
import "./index.css";
import { FireTwoTone } from "@ant-design/icons";
import { getBlogList } from "../../api/request";
import { withRouter } from "react-router";

const Hot = (props) => {
  const [blogs, setblogs] = useState([]);

  const handleJume = (blog) => {
    props.history.push(`/blog/${blog.id}`, blog);
  };
  const hotBlogsList = blogs.map((item, index) => (
    <p
      onClick={() => {
        handleJume(item);
      }}
      key={index}
    >
      {item.title}
    </p>
  ));
  useEffect(() => {
    (async () => {
      const {
        data: { data: mBlogs },
      } = await getBlogList();
      const orderedBlogs = mBlogs.sort((a, b) => a.views < b.views).slice(0, 4);
      setblogs(orderedBlogs);
    })();
  }, []);
  return (
    <div className="hot">
      <div className="hot-title">
        <span style={{ marginRight: 4 }}>Hot</span>
        <FireTwoTone twoToneColor="#eb2f96" />
      </div>
      <div className="hot-content">{hotBlogsList}</div>
    </div>
  );
};

export default withRouter(Hot);
