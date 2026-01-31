import { usePosts } from "../../hooks/usePosts";

const PostListPage = () => {
  const { posts } = usePosts();


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

          <a
            href="#"
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
            "
          >
            <img src="/src/assets/icons/pencil.svg" alt="연필 아이콘" className="w-4 h-4 ml-1" />
            <span className="text-white text-xs">기록하기</span>
          </a>
        </section>

        {/* 게시글 목록 레이아웃*/}
        <section className="h-screen">

          {posts.map(post => (
            <Link to={`/posts/${post.id}`}>
              <article key={post.id} className="h-[20%] border-b-2 flex items-center border-gray-300/30">
                <div className="ml-4 flex flex-col">
                  <h3 className="font-semibold mb-1">
                    {post.title}
                  </h3>
                  <p className="font-light text-xs text-[#5D5F67] mb-5">
                    {post.content}
                  </p>
                  <span
                    className="text-xs font-light text-[#AAAAAA]"
                  >
                    {new Date(post.createdAt).toLocaleString()}
                  </span>
                </div>
              </article>
            </Link>
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
          <a href="#">
            <img src="/src/assets/icons/blackAngleBracket.svg" alt="꺽쇠" />
          </a> {/* 왼쪽 꺽쇠 */}

          <a href="#" className="font-bold text-black">1</a> {/*현재 페이지일때는 text-bold, text-black */}
          <a href="#" className="">2</a>
          <a href="#" className="">3</a>
          <a href="#" className="">4</a>
          <a href="#" className="">5</a>

          <img src="/src/assets/icons/dotdotdot.svg" alt="점점점" />

          <a href="#" className="">14</a> {/*최대 페이지*/}

          <a href="#">
            <img src="/src/assets/icons/blackAngleBracket.svg" alt="꺽쇠" className="-scale-x-100" />
          </a> {/* 오른쪽 꺽쇠 */}
        </nav>
      </main>
    </>
  );
}

export default PostListPage;