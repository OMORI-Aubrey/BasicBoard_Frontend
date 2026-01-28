const PostListPage = () => {
  return (
    <>
      <main
        className="
        h-screen
        flex flex-col
        justify-start
        w-[60%]
        mx-auto
        "
      >
        {/* 게시판 이름 */}
        <nav
          className="
          w-full
          "
        >
          <h2 className="font-bold text-2xl text-[#76441D]">나의 B로그</h2>
        </nav>

        {/* 검색어 입력, 글쓰기 */}
        <section
          className="
          w-full
          h-[10%]
          flex justify-end
          items-center
          relative
          pt-4
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
            text-white
            text-xs
            min-w-20
            "
          >
            기록하기
          </a>
        </section>

        {/* 게시글 목록 레이아웃*/}
        <section className="h-screen">

          <article className="h-[20%] border-b-2 flex items-center border-gray-300/30">
            <div className="ml-4 flex flex-col">
              <h3 className="font-semibold mb-1">
                체험단 취소는 어떻게 하나요?
              </h3>
              <p className="font-extralight text-xs mb-5">
                체험단 하면서 목과 어깨가 너무 안좋아져서
                이제 살려고 당첨된거 취소할려고 하는데 취소 버튼이 안보이네요
                취소는 어디서 하면 될까요?
              </p>
              <time
                datetime="2024-07-26"
                className="text-xs font-light"
              >
                2024.07.26
              </time>
            </div>
          </article>

        </section>

        {/* 페이지네이션 */}
        <nav
          className="
          mx-auto
          mt-auto
          w-[25%]
          flex
          justify-between

          text-gray-500
          text-xs
          font-extralight
          "
        >
          <a href="#">
            <img src="/src/assets/icons/AngleBracket.svg" alt="꺽쇠" />
          </a> {/* 왼쪽 꺽쇠 */}
          
          <a href="#" className="font-bold text-black">1</a> {/*현재 페이지일때는 text-bold, text-black */}
          <a href="#" className="">2</a>
          <a href="#" className="">3</a>
          <a href="#" className="">4</a>
          <a href="#" className="">5</a>

          <a href="#" className="">
            <img src="/src/assets/icons/dotdotdot.svg" alt="점점점" />
          </a>

          <a href="#" className="">14</a> {/*최대 페이지*/}

          <a href="#">
            <img src="/src/assets/icons/AngleBracket.svg" alt="꺽쇠" className="-scale-x-100" />
          </a> {/* 오른쪽 꺽쇠 */}
        </nav>
      </main>
    </>
  );
}

export default PostListPage;