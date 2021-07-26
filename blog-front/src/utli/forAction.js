import React, { useState } from "react";
import InputComment from "../pages/inputcomment";
export default function ForAction(props) {
  const [showReply, setShowReply] = useState(false);

  const [spin, setspin] = useState(false);
  const handleFold = (value) => {
    setShowReply(value);
  };
  return (
    <div>
      <span
        onClick={() => {
          setShowReply(!showReply);
        }}
      >
        {showReply ? "Fold" : "Reply"}
      </span>
      {showReply ? (
        <InputComment
          comment_id={props.comment_id}
          article_id={props.article_id}
          toAuthor={props.toAuthor}
          handleFold={handleFold}
        />
      ) : (
        ""
      )}
    </div>
  );
}
