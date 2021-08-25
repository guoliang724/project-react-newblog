import React from "react";
import PostInfo from "../postinfo";
import { useState, useEffect } from "react";
import { getComments } from "../../api/request";
import "./index.css";
import moment from "moment";
import CommentCom from "../../components/comment";
export default function Blog(props) {
  const { title, views, content, createdAt, tags, id } =
    props.history.location.state;
  var date = moment(parseInt(createdAt)).format("YYYY-MM-DD HH:mm:ss");
  var readingTime = minsCalculate(content);

  //handle comments
  const [lists, setlists] = useState([]);

  //handle adding comment
  const handleAddComment = (value) => {
    setlists([...lists, value]);
  };
  useEffect(() => {
    (async () => {
      var result = await getComments();

      var data = result.data.data.filter((item) => item.article_id === id);

      setlists(data);
    })();
  }, []);

  return (
    <div className="blog">
      <div className="blog-header">
        <h1>{title}</h1>
        <div className="postInfo">
          <PostInfo
            date={date}
            readingTime={readingTime}
            tags={tags}
            views={views}
          />
        </div>
      </div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
      <div className="blog-comment">
        <CommentCom
          className="blog-comments"
          lists={lists}
          handleAddComment={handleAddComment}
          article_id={id}
        ></CommentCom>
      </div>
    </div>
  );
}

function minsCalculate(content) {
  return Math.ceil(content.length / 400);
}
