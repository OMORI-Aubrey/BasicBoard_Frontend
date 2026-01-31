import { postService } from "../api/postService";

export const useCreatePost = () => {
  const createPost = async (data) => {
    await postService.createPost(data);
  };

  return { createPost };
};