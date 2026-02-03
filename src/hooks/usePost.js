import { useEffect, useState } from "react";
import { postService } from "../api/postService";

export const usePost = (id) => {
  const [post, setPost] = useState(null);
  const [prevId, setPrevId] = useState(null);
  const [nextId, setNextId] = useState(null);


  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      const data = await postService.getPostById(id);

      setPost(data.post);
      setPrevId(data.prevId);
      setNextId(data.nextId);
    };

    fetchPost();
  }, [id]);

  return { post, prevId, nextId };
};
