const SearchBar = ({
  inputValue,
  setInputValue,
  onSearch,
}) => {
  return (
    <>
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
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <input
          type="text"
          placeholder="검색어를 입력해 주세요."
          className="focus:outline-none w-[90%]"
          value={inputValue}
          onChange={(e) => {
            const value = e.target.value;
            setInputValue(value);

            if (value.trim() === "") {
              onSearch("");
            }
          }}
        />

        <button
          type="submit"
          className="
              ml-auto
              w-[5%]
              "
          onClick={onSearch}
        >
          <img src="/src/assets/icons/search.svg" alt="돋보기 아이콘" className="w-5 h-5" />
        </button>
      </form>
    </>
  )
}

export default SearchBar;