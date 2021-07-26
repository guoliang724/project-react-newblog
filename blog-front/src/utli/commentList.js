import { useState } from "react";
import useComment from "./useComment";
import { List, Comment, Tooltip } from "antd";
import moment from "moment";

import ForAction from "./forAction";
import ForChildren from "./useForChildren";

export default function ToCommentList(article_id) {
  var comments = useComment(article_id);
  console.log("comments", comments);
  var data = comments.map((item, index) => {
    var time = moment(item.createdAt);

    return {
      action: [
        <ForAction
          comment_id={item.id}
          article_id={article_id}
          toAuthor={item.author}
        />,
      ],
      author: item.author,
      avatar: item.avatar,
      content: <p>{item.content}</p>,
      datetime: (
        <Tooltip title={time.format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().subtract(time, "days").fromNow()}</span>
        </Tooltip>
      ),
      children: item.children,
    };
  });
  return (
    <List
      className="comment-list"
      header={`${data.length} replies`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <li>
          <Comment
            actions={item.action}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          >
            {
              <ForChildren
                children={item.children}
                toAuthor={item.author}
                comment_id={item.id}
              />
            }
          </Comment>
        </li>
      )}
    />
  );
}
