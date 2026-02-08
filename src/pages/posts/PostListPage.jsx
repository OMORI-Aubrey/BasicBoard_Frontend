import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPaginationRange } from "../../utils/pagintation";
import RecentSearches from "../../components/search/RecentSearches";
import { useRecentSearches } from "../../hooks/useRecentSearches";
import SearchBar from "../../components/search/SearchBar";
import { usePosts } from "../../hooks/usePosts";
import Post from "../../components/list/Post";


const PostListPage = () => {
  const navigate = useNavigate();
  const { recent, addSearch, removeSearch, clearAll } = useRecentSearches();
  const [inputValue, setInputValue] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const {
    posts,
    currentPage,
    setCurrentPage,
    total,
    totalPages,
    isLoading,
    isError,
    error,
  } = usePosts(1, searchKeyword); // Pass initial page and searchKeyword to usePosts

  const handleSearch = (value) => {
    const keyword = value ?? inputValue;
    const trimmed = keyword.replace(/\s/g, "");

    if (!trimmed) {
      setSearchKeyword("");
      setCurrentPage(1); // Use setCurrentPage from hook
      return;
    }

    setSearchKeyword(trimmed);
    setCurrentPage(1); // Use setCurrentPage from hook
    addSearch(keyword);
  };

  const { start, end } = getPaginationRange(currentPage, totalPages);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) { // Check totalPages > 0 to avoid setting page to 0
      setCurrentPage(totalPages); // Use setCurrentPage from hook
    }
  }, [currentPage, totalPages, setCurrentPage]); // Add setCurrentPage to dependency array

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>로딩 중...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>오류 발생: {error?.message || "알 수 없는 오류"}</p>
      </div>
    );
  }

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
          <SearchBar
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSearch={handleSearch}
          />

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

        <section className="h-screen">
          <RecentSearches
            searches={recent}
            onSelect={(keyword) => {
              setInputValue(keyword);
              setSearchKeyword(keyword.replace(/\s/g, ""));
              setCurrentPage(1); // Use setCurrentPage from hook
            }}
            onRemove={removeSearch}
            onClear={clearAll}
          />

          {posts.length === 0 && !isLoading && !isError ? (
            <p className="text-center mt-10 text-gray-500">게시글이 없습니다.</p>
          ) : (
            posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                searchTerm={searchKeyword}
              />
            ))
          )}
        </section>

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
            onClick={() => setCurrentPage(currentPage - 1)} // Use setCurrentPage
            disabled={currentPage === 1} // Use currentPage
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
              <button onClick={() => setCurrentPage(1)}>1</button> {/* Use setCurrentPage */}
              {start > 2 && <span><img src="/src/assets/icons/dotdotdot.svg" alt="..." /></span>}
            </>
          )}

          {/* 페이지 번호 */}
          {Array.from({ length: end - start + 1 }, (_, i) => {
            const pageNumber = start + i;
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)} // Use setCurrentPage
                className={` ${currentPage === pageNumber // Use currentPage
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
              <button onClick={() => setCurrentPage(totalPages)}> {/* Use setCurrentPage */}
                {totalPages}
              </button>
            </>
          )}

          {/* 다음 */}
          <button
            onClick={() => setCurrentPage(currentPage + 1)} // Use setCurrentPage
            disabled={currentPage === totalPages} // Use currentPage
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