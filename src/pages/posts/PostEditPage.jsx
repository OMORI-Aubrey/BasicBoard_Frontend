import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { postService } from "../../api/postService";


const PostEditPage = () => {
  const { id } = useParams();
  const { post } = usePost(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDirty, setIsDirty] = useState(false);


  const handleSubmit = async () => {
    try {
      await postService.updatePost(id, { title, content });
      navigate(`/posts/${id}`);
    } catch (e) {
      console.error("수정 실패", e);
      alert("수정에 실패했습니다.");
    }
  };


  useEffect(() => {
    if (!post) return;
    setTitle(post.title);
    setContent(post.content);
  }, [post]);


  useEffect(() => {
    if (!post) return;
    setIsDirty(title !== post.title || content !== post.content);
  }, [title, content, post]);


  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isDirty) return;

      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () =>
      window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);


  useEffect(() => {
    const handlePopState = () => {
      if (!isDirty) return;

      const confirmed = window.confirm(
        "기록을 그만 두시겠습니까? 변경사항이 저장되지 않습니다."
      );

      if (!confirmed) {
        navigate(0);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isDirty]);

  if (!post) return null;


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
              type="button"
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
  )
};

export default PostEditPage;