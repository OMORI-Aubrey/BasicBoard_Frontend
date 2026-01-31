import { useEffect, useState } from "react";
import { postService } from "../api/postService";
import { mockPosts } from "../mocks/posts.mock";

const LIMIT = 5;


export const usePosts = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);


  const fetchPosts = async (page = 1) => {
    const data = await postService.getPosts(page);

    setPosts(data.items);
    setPageInfo({
      page: data.page,
      totalPages: data.totalPages,
    });
  };


  useEffect(() => {
    const start = (page - 1) * LIMIT;
    const end = start + LIMIT;

    setPosts(mockPosts.slice(start, end));
    setTotalPages(Math.ceil(mockPosts.length / LIMIT));
  }, [page]);


  return {
    posts,
    page,
    totalPages,
    setPage,
  };
};
