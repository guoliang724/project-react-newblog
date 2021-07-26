import { getComments } from "../api/request";
import { useEffect, useState } from "react";
export default function useComment(article_id) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async (article_id) => {
      var result = await getComments(article_id);
      if (result) {
        setComments(result.data.data);
      }
    })(article_id);
  }, [article_id]);
  return comments;
}
