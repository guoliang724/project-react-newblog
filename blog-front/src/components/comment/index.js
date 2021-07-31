import React from "react";
import CommentList from "../../pages/commentlist";
import CommentInput from "../../pages/commentinput";
export default function CommentCom(props) {
  var { lists, handleAddComment, article_id } = props;
  return (
    <div className="commentlist">
      <CommentList lists={lists} />
      <CommentInput
        handleAddComment={handleAddComment}
        article_id={article_id}
      />
    </div>
  );
}
