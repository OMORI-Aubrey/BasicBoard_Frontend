import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { useNavigate } from "react-router-dom";
import { postService } from "../../api/postService";
import dayjs from "dayjs";


const PostDetailPage = () => {
  const { id } = useParams();
  const { post, prevId, nextId } = usePost(id);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if (!confirm) return;

    await postService.deletePost(id);
    navigate("/");
  };

  if (!post) return


  return (
    <>
      <main
        className="
        w-screen
        h-screen
        flex
        items-center
        justify-center
        "
      >
        <article
          className="
            w-[55%]
            h-[45%]
            mb-[10%]
            px-2
          "
        >
          <header
            className="
            h-[36%]
            flex
            flex-col
            "
          >
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>

            <span
              className="text-xs font-normal text-[#AAAAAA] ml-auto"
            >
              {dayjs(post.createdAt).format("YYYY.MM.DD HH:mm")}
            </span>
          </header>

          <section
            className="
            h-[37%]
            flex
            items-center
            border-t-2
          border-gray-300/30
            "
          >
            <p className="text-sm">
              {post.content}
            </p>
          </section>

          <div className="h[27%] flex flex-col">
            <nav
              className="
              flex
              flex-row
              justify-center
              gap-1.5
              "
            >
              <button
                type="button"
                className="
                flex
                items-center
                gap-0.5
                bg-[#C4C5CA]
                rounded
                px-2
                py-1.5
                select-none
                "
                style={{
                  visibility: prevId ? "visible" : "hidden"
                }}
                onClick={() => navigate(`/posts/${prevId}`)}
              >
                <img
                  src="/src/assets/icons/whiteAngleBracket.svg"
                  alt="꺽쇠"
                  className="w-4 h-4"
                />

                <span className="text-white text-sm">
                  이전글
                </span>
              </button>

              <button
                type="button"
                className="
                flex
                items-center
                gap-0.5
                bg-[#77451E]
                rounded
                px-2
                py-1.5
                select-none
                "
                style={{
                  visibility: nextId ? "visible" : "hidden"
                }}
                onClick={() => navigate(`/posts/${nextId}`)}
              >
                <span className="text-white text-sm">
                  다음글
                </span>

                <img
                  src="/src/assets/icons/whiteAngleBracket.svg"
                  alt="꺽쇠"
                  className="-scale-x-100 w-4 h-4"
                />
              </button>
            </nav>

            <footer
              className="
              flex
              flex-row
              justify-end
              gap-5
              "
            >
              <button
                className="
                flex
                items-center
                rounded
                px-3.5
                py-1
                gap-1
                border-2
                border-[#D4D5D8]
                select-none
                "
                >
                <img
                  src="/src/assets/icons/brownX.svg"
                  alt="X"
                  className="w-3 h-3"
                />

                <span className="font-semibold" onClick={handleDelete}>
                  삭제하기
                </span>
              </button>

              <button
                className="
                flex
                items-center
                rounded
                px-3.5
                py-1
                gap-1
                border-2
                border-[#D4D5D8]
                select-none
                "
                >
                <img src="/src/assets/icons/pencil.svg"
                  alt="연필"
                  className="w-4 h-4"
                />

                <span className="font-semibold" onClick={handleEdit}>
                  수정하기
                </span>
              </button>
            </footer>
          </div>

        </article>
      </main>
    </>
  );
}

export default PostDetailPage;