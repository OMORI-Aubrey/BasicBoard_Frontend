export const getPaginationRange = (
  page,
  totalPages,
  visible = 5
) => {
  const half = Math.floor(visible / 2);

  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, page + half);

  if (end - start + 1 < visible) {
    if (start === 1) {
      end = Math.min(totalPages, start + visible - 1);
    } else if (end === totalPages) {
      start = Math.max(1, end - visible + 1);
    }
  }

  return { start, end };
};