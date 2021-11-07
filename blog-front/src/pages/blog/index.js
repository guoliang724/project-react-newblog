import React from "react";
import PostInfo from "../postinfo";
import "./index.css";
import timeCovert from "../../utli/timecovert";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Blog(props) {
  const { title, views, content, createdAt, tags, id } =
    props.history.location.state;
  var date = timeCovert(createdAt);
  var readingTime = minsCalculate(content);

  return (
    <div className="blog">
      <div className="blog-header">
        <h1 className="blog-title">{title}</h1>
        <div>
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
        // dangerouslySetInnerHTML={{
        //   __html: content,
        // }}
      >
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          skipHtml={false}
        />
      </div>
    
    </div>
  );
}

function minsCalculate(content) {
  return Math.ceil(content.length / 400);
}
