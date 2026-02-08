import { normalize } from "./normalize";

const highlightText = (text, keyword) => {
  if (!keyword) return text;

  const normalizedText = normalize(text);
  const normalizedKeyword = normalize(keyword);

  const start = normalizedText.indexOf(normalizedKeyword);
  if (start === -1) return text;

  const end = start + keyword.length;

  return (
    <>
      {text.slice(0, start)}
      <span className="bg-yellow-200">
        {text.slice(start, end)}
      </span>
      {text.slice(end)}
    </>
  );
};

export default highlightText;