export const formatRating = (value?: number) => {
  if (value === undefined) return "";

  return value.toFixed(1);
};
