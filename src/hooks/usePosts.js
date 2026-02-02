import { useEffect, useState } from "react";
import { postService } from "../api/postService";

export const usePosts = () => {

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (page) => {
    try {
      const data = await postService.getPosts(page);
      setPosts(data.items);
      setTotal(data.total);
      setTotalPages(data.totalPages);
    } catch (e) {
      console.error("게시글 조회 실패", e);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  return {
    posts,
    page,
    total,
    totalPages,
    setPage,
  };
};
