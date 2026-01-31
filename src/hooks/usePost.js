import { useEffect, useState } from "react";
import { mockPosts } from "../mocks/posts.mock";

export const usePost = (id) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const found = mockPosts.find(p => p.id === Number(id));
    setPost(found);
  }, [id]);

  return { post };
}