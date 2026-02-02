import { useEffect, useState } from "react";
import { postService } from "../api/postService";

export const usePost = (id) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await postService.getPostById(id);
        setPost(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return { post, loading, error };
};
