import { useEffect, useState } from "react";
import { postService } from "../api/postService";


export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    totalPages: 1,
  });


  const fetchPosts = async (page = 1) => {
    const data = await postService.getPosts(page);

    setPosts(data.items);
    setPageInfo({
      page: data.page,
      totalPages: data.totalPages,
    });
  };


  useEffect(() => {
    fetchPosts(1);
  }, []);


  return {
    posts,
    pageInfo,
    fetchPosts,
  };
};
