import React from "react";
import moment from "moment";
import { Tooltip, Comment } from "antd";
import ForAction from "./forAction";
export default function ForChildren(props) {
  const { children, toAuthor } = props;

  if (children === []) return null;
  else if (!Array.isArray(children)) return null;
  else {
    return children.map((item, index) => {
      var action = [
        <ForAction
          comment_id={item.comment_id}
          article_id={0}
          toAuthor={item.author}
          key={index}
        />,
      ];
      var content = (
        <p>
          <span style={{ color: "#ccc" }}>to {toAuthor}:</span>
          {item.content}
        </p>
      );
      var time = moment(item.createdAt);
      var datetime = (
        <Tooltip key={index} title={time.format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().subtract(time, "days").fromNow()}</span>
        </Tooltip>
      );
      return (
        <Comment
          actions={action}
          author={item.author}
          avatar={item.avatar}
          content={content}
          datetime={datetime}
          key={index}
        />
      );
    });
  }
}
