import { BASE_URL } from "../config/api";

export const postService = {
  // 글 목록 조회
  getPosts: (page = 1, limit = 20) =>
    fetch(`${BASE_URL}/posts?page=${page}&limit=${limit}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("글 목록 조회 실패");
        }
        return res.json();
      }),

  
  // 글 상세 조회
  getPostById: (id) =>
    fetch(`${BASE_URL}/posts/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("글 상세 조회 실패");
        }
        return res.json();
      }),

  
  // 글 작성
  createPost: (data) =>
    fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }),

  
  // 글 수정
  updatePost: (id, data) =>
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }),

  
  // 글 삭제
  deletePost: (id) =>
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    }),
};
