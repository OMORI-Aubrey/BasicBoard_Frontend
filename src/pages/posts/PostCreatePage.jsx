import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../../hooks/useCreatePost";


const PostCreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { createPost } = useCreatePost();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await createPost({ title, content });
    navigate("/");
  }

  return (
    <>
      <main
        className="
        w-screen
        mt-[20vh]
        h-[80vh]
        flex
        justify-center
        "
      >
        <form
          className="
          w-[60%]
          h-[50%]
          px-2
          "
        >
          <div
            className="
            w-full
            h-[33%]
            border-b-2
          border-gray-300/30
            "
          >
            <input
              type="text"
              placeholder="제목"
              value={title}
              className="
              w-full
              mt-5
              focus:outline-none
              placeholder-gray-400
              placeholder:text-2xl
              font-medium
              text-2xl
              "
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div
            className="
            w-full
            h-[67%]
            "
          >
            <textarea
              placeholder="오늘의 시간을, 여기에 남겨보세요"
              value={content}
              className="
              w-full
              h-full
              pt-9
              focus:outline-none
              resize-none
              placeholder-gray-400
              placeholder:text-sm
              text-base
              "
              onChange={e => setContent(e.target.value)}
            />
          </div>
        </form>

        <footer
          className="
          w-full
          h-[10%]
          mt-auto
          fixed
          bottom-0
          bg-[#5A3E2B]
          "
        >
          <div
            className="
            h-full
            flex
            items-center
            justify-end
            mr-[8%]
            "
          >
            <button
              className="
              px-3
              py-2
              text-sm
            text-white
            bg-[#75441D]
              rounded
              "
              onClick={handleSubmit}
            >
              기록 저장
            </button>
          </div>
        </footer>
      </main>
    </>
  );
}

export default PostCreatePage;