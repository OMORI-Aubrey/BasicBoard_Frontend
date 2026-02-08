import { useEffect, useState, useMemo } from "react";
import { postService } from "../api/postService";

export const usePosts = (initialPage = 1, searchKeyword = '') => {

  const [page, setPage] = useState(initialPage);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const [allFetchedPosts, setAllFetchedPosts] = useState([]);
  const [paginatedAndFilteredPosts, setPaginatedAndFilteredPosts] = useState([]);


  const fetchPosts = async (currentPage) => {
    setIsLoading(true);
    setIsError(false);
    setError(null);
    try {
      if (searchKeyword) {
        let allItems = [];
        let currentPageNum = 1;
        let hasMore = true;
        let totalCount = 0;
        let lastTotalPages = 1;
        const limit = 5;

        // Fetch all pages until no more data or totalPages is reached
        while(hasMore) {
          const data = await postService.getPosts(currentPageNum, limit);
          if (data && data.items) {
            allItems = allItems.concat(data.items);
            totalCount = data.total;
            lastTotalPages = data.totalPages;
            currentPageNum++;
            hasMore = currentPageNum <= data.totalPages;
          } else {
            hasMore = false;
          }
        }
        setAllFetchedPosts(allItems);
        setTotal(totalCount);
        setTotalPages(lastTotalPages);
      } else {
        const data = await postService.getPosts(currentPage);
        setPaginatedAndFilteredPosts(data.items);
        setTotal(data.total);
        setTotalPages(data.totalPages);
        setAllFetchedPosts([]);
      }
    } catch (e) {
      console.error("게시글 조회 실패", e);
      setIsError(true);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Reset page to 1 when searchKeyword changes
    if (searchKeyword) {
        setPage(1);
    }
    fetchPosts(page);
  }, [page, searchKeyword]);

  useEffect(() => {
    if (searchKeyword && allFetchedPosts.length > 0) {
      const lowercasedKeyword = searchKeyword.toLowerCase();
      const filtered = allFetchedPosts.filter(post =>
        post.title.toLowerCase().includes(lowercasedKeyword) ||
        post.content.toLowerCase().includes(lowercasedKeyword)
      );

      const limit = 5;
      const paginated = filtered.slice((page - 1) * limit, page * limit);

      setPaginatedAndFilteredPosts(paginated);
      setTotal(filtered.length);
      setTotalPages(Math.ceil(filtered.length / limit));
    }
  }, [searchKeyword, allFetchedPosts, page]);

  return {
    posts: paginatedAndFilteredPosts,
    currentPage: page,
    setCurrentPage: setPage,
    total,
    totalPages,
    isLoading,
    isError,
    error,
  };
};
