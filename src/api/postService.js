import { BASE_URL } from "../config/api";

export const postService = {
  getPosts: (page = 1, limit = 20) => 
    fetch(`${BASE_URL}/posts?page=${page}&limit=${limit}`)
      .then(res => res.json()),
};