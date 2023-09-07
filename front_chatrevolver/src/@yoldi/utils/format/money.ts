import { numberWithSpaces } from "./number";

export const formatMoney = (amount?: string | number, currency: string = "₽"): string => {
  if (isNaN(Number(amount))) return "";

  const num = numberWithSpaces(Number(amount).toFixed(2));

  if (!currency) return num;

  return num + "\u00A0" + currency;
};

export default formatMoney;
