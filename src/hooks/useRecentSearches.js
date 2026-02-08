// hooks/useRecentSearches.js
import { useState, useEffect } from "react";

export const useRecentSearches = () => {
  const [recent, setRecent] = useState(() => {
    const saved = localStorage.getItem("recentKeywords");
    return saved ? JSON.parse(saved) : [];
  });

  const addSearch = (keyword) => {
    setRecent(prev => {
      const filtered = prev.filter(item => item.keyword !== keyword);
      const newItem = {
        id: Date.now(),
        keyword,
        date: new Date().toLocaleDateString("ko-KR", {
          month: "2-digit",
          day: "2-digit",
        }),
      };
      return [newItem, ...filtered].slice(0, 10);
    });
  };

  const removeSearch = (id) => {
    setRecent(prev => prev.filter(item => item.id !== id));
  };

  const clearAll = () => {
    setRecent([]);
  };

  useEffect(() => {
    localStorage.setItem("recentKeywords", JSON.stringify(recent));
  }, [recent]);

  return { recent, addSearch, removeSearch, clearAll };
};
