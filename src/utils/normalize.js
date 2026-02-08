export const normalize = (text = "") =>
  text
    .toLowerCase()
    .replace(/\s/g, "");