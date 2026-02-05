const RecentSearches = ({ searches, onClick, onRemove }) => {
  if (searches.length === 0) return null;

  return (
    <>
      <div
        className="
        fixed
        flex
        flex-col 
        ml-[12%]
        w-[23%]
        rounded-3xl
        border-2
      border-gray-300
      bg-white
        "
      >
        <div
          className="
          pl-3
          py-1
          mt-1
          mb-4
          "
        >
          <p className="text-black font-bold">
            최근 검색어
          </p>
        </div>

        <div
          className="
            px-2
            py-2

          "
        >
          <ul
            className="
            flex
            flex-col
            gap-1
            border-b-2
            border-gray-300/30
            pb-2
            "
          >
            {searches.map(({ keyword, date }) => (
              <li
                key={keyword}
                className="flex items-center pl-1"
              >
                <button
                  className=""
                  onClick={() => onClick(keyword)}
                >
                  {keyword}
                </button>
                
                <div className="flex ml-auto gap-2">
                <time className="text-gray-400 font-light text-sm">
                  {date}
                </time>

                <button
                  className="text-gray-400"
                  onClick={() => onRemove(keyword)}
                >
                  <img src="/src/assets/icons/grayX.svg" alt="회색 X" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex">
          <button
            className="pl-3 pb-2"
            onClick={() => {
              if (window.confirm("검색기록을 전체 삭제하시겠습니까?")) {
                onClear();
              }
            }}
          >
            <p className="text-xs font-light text-[#AAAAAA]">
              전체삭제
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default RecentSearches;
