import { useEffect, useState } from "react";
import dayjs from "dayjs";

const KEY = "recent_searches";
const MAX = 10;

export const useRecentSearches = () => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(KEY)) || [];
    setRecent(saved);
  }, []);

  const addSearch = (keyword) => {
    const date = dayjs().format("MM.DD");

    const updated = [
      { keyword, date },
      ...recent.filter((r) => r.keyword !== keyword),
    ].slice(0, MAX);

    setRecent(updated);
    localStorage.setItem(KEY, JSON.stringify(updated));
  };

  const removeSearch = (keyword) => {
    const updated = recent.filter((r) => r.keyword !== keyword);
    setRecent(updated);
    localStorage.setItem(KEY, JSON.stringify(updated));
  };

  const clearAll = () => {
    setRecent([]);
    localStorage.removeItem(KEY);
  };

  return { recent, addSearch, removeSearch, clearAll };
};
