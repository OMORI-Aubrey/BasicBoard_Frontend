import { useEffect, useState } from "react";

const STORAGE_KEY = "recent_searches";
const MAX_COUNT = 5;

export const useRecentSearches = () => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setRecent(saved);
  }, []);

  const addSearch = (keyword) => {
    if (!keyword.trim()) return;

    const updated = [
      keyword,
      ...recent.filter((k) => k !== keyword),
    ].slice(0, MAX_COUNT);

    setRecent(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const removeSearch = (keyword) => {
    const updated = recent.filter((k) => k !== keyword);
    setRecent(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const clearAll = () => {
    setRecent([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    recent,
    addSearch,
    removeSearch,
    clearAll,
  };
};
