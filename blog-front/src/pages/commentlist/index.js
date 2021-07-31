import React from "react";
import moment from "moment";
import { List, Comment, Tooltip } from "antd";
moment.locale();
export default function CommentList({ lists }) {
  console.log("here", lists);
  var data = lists.map((item, index) => {
    var intCreatedAt = parseInt(item.createdAt);
    var date = moment(intCreatedAt).format("YYYY-MM-DD HH:mm:ss");
    var fromnow = moment(date).fromNow();
    console.log("date", date);
    console.log("fromnow", fromnow);
    return {
      author: item.author,
      avatar: item.avatar,
      content: <p>{item.content}</p>,
      datetime: (
        <Tooltip title={date}>
          <span>{fromnow}</span>
        </Tooltip>
      ),
    };
  });
  return (
    <div>
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
    </div>
  );
}
