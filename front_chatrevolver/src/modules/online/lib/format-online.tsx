import formatNumber from "@yoldi/utils/format/number";

export const formatOnline = (value?: number): string => {
  if (!value) return "";

  return formatNumber(value, 0, true);
};
