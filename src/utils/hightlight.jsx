import { normalize } from "./normalize";

export const highlight = (text, keyword) => {
  if (!keyword) return text;

  const normalizedText = normalize(text);
  const index = normalizedText.indexOf(keyword);
  if (index === -1) return text;

  let count = 0;
  let start = -1;
  let end = -1;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      if (count === index) start = i;
      if (count === index + keyword.length) {
        end = i;
        break;
      }
      count++;
    }
  }

  if (end === -1) end = text.length;

  return (
    <>
      {text.slice(0, start)}
      <span className="font-bold text-orange-600">
        {text.slice(start, end)}
      </span>
      {text.slice(end)}
    </>
  );
};
