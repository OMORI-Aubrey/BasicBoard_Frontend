import { useEffect, useState } from "react";
import { postService } from "../api/postService";

export const usePost = (id) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!id) return;

    postService.getPostById(id)
      .then(data => setPost(data));
  }, [id]);

  return { post };
};