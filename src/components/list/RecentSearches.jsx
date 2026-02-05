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
          pl-3 py-1
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
            "
          >
            {searches.map((keyword) => (
              <li
                key={keyword}
                className="flex items-center border-2"
              >
                <button
                  className="border-2"
                  onClick={() => onClick(keyword)}
                >
                  {keyword}
                </button>

                <time>
                  
                </time>

                <button
                  className="text-gray-400"
                  onClick={() => onRemove(keyword)}
                >
                  <img src="/src/assets/icons/grayX.svg" alt="회색 X" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex">
          <button className="pl-3 py-2">
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
