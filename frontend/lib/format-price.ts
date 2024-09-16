const formatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

/**
 * 金額を日本円形式でフォーマットする
 * @param price フォーマットする金額（数値）
 * @returns フォーマットされた金額（文字列）
 */
export const formatPrice = (price: number): string => {
  if (isNaN(price)) {
    throw new Error("無効な価格です");
  }
  return formatter.format(price);
};
