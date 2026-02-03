import { usePosts } from "../../hooks/usePosts";
import Post from "../../components/list/Post";
import { useNavigate } from "react-router-dom";
import { getPaginationRange } from "../../utils/pagintation";



const PostListPage = () => {
  const { posts, page, totalPages, setPage } = usePosts();
  const { start, end } = getPaginationRange(page, totalPages);
  const navigate = useNavigate();


  return (
    <>
      <main
        className="
        w-[60%]
        h-screen
        pt-10
        flex flex-col
        justify-start
        mx-auto
        "
      >
        {/* 게시판 이름 */}
        <nav
          className="
          w-full
          "
        >
          <h2
            className="font-bold text-2xl text-[#76441D] mt-2"
            style={{ fontFamily: '"Noto Serif KR", serif' }}
          >
            나의 B로그
          </h2>
        </nav>

        {/* 검색어 입력, 글쓰기 */}
        <section
          className="
          w-full
          h-[10%]
          flex justify-end
          items-center
          relative
          pt-3
          border-b-2
          border-gray-400
          "
        >
          <form
            className="
            grow
            text-center
            w-full
            max-w-md
            mx-auto
            flex
            items-center
            pb-2
            border-b-2
            border-black
            "
          >
            <input
              type="text"
              placeholder="검색어를 입력해 주세요."
              className="
              focus:outline-none
              w-[90%]
              "
            />

            <button
              className="
              ml-auto
              w-[5%]
            "
            >
              <img src="/src/assets/icons/search.svg" alt="돋보기 아이콘" className="w-5 h-5" />
            </button>
          </form>

          <button
            type="button"
            className="
            mr-3
            px-4
            py-2
            rounded-sm
            bg-[#77451E]
            min-w-28
            inline-flex
            items-center
            gap-1.5
            select-none
            "
            onClick={() => navigate("/posts/new")}
          >
            <img src="/src/assets/icons/pencil.svg" alt="연필 아이콘" className="w-4 h-4 ml-1" />
            <span className="text-white text-xs">기록하기</span>
          </button>
        </section>

        {/* 게시글 목록 레이아웃*/}
        <section className="h-screen">
          {posts.map((post) => (
            <article key={post.id} className="h-[20%] border-b-2 flex items-center border-gray-300/30">
              <Post post={post} />
            </article>
          ))}

        </section>

        {/* 페이지네이션 */}
        <nav
          className="
          mx-auto
          mt-auto
          mb-5
          pt-1
          w-[25%]
          flex
          justify-between
          text-gray-500
          text-xs
          font-extralight
          "
        >
          {/* 이전 */}
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="disabled:opacity-30"
          >
            <img
              src="/src/assets/icons/blackAngleBracket.svg"
              alt="왼쪽 꺽쇠"
            />
          </button>

          {/* 처음 페이지 + ... */}
          {start > 1 && (
            <>
              <button onClick={() => setPage(1)}>1</button>
              {start > 2 && <span><img src="/src/assets/icons/dotdotdot.svg" alt="..." /></span>}
            </>
          )}

          {/* 페이지 번호 */}
          {Array.from({ length: end - start + 1 }, (_, i) => {
            const pageNumber = start + i;
            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={` ${page === pageNumber
                    ? "font-bold text-black"
                    : "hover:text-black"
                  }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* ... + 마지막 페이지 */}
          {end < totalPages && (
            <>
              {end < totalPages - 1 && <span><img src="/src/assets/icons/dotdotdot.svg" alt="..." /></span>}
              <button onClick={() => setPage(totalPages)}>
                {totalPages}
              </button>
            </>
          )}

          {/* 다음 */}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="disabled:opacity-30"
          >
            <img
              src="/src/assets/icons/blackAngleBracket.svg"
              alt="오른쪽 꺽쇠"
              className="-scale-x-100"
            />
          </button>
        </nav>
      </main>
    </>
  );
}

export default PostListPage;