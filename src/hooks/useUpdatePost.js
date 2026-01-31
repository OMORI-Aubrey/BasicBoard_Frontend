import { postService } from "../api/postService";

export const useUpdatePost = (id) => {
  const updatePost = async (data) => {
    await postService.updatePost(id, data);
  };

  return { updatePost };
};
