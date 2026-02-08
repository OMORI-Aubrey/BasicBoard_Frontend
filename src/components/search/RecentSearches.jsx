const RecentSearches = ({
  searches,
  onSelect,
  onRemove,
  onClear,
}) => {
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
            {searches.map((item) => (
              <li
                key={item.id}
                className="flex items-center pl-1"
                onClick={() => onSelect(item.keyword)}
              >
                <button>
                  {item.keyword}
                </button>

                <div className="flex ml-auto gap-2">
                  <time className="text-gray-400 font-light text-sm">
                    {item.date}
                  </time>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemove(item.id);
                    }}
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
            onClick={onClear}
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
