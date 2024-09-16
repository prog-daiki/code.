const formatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

/**
 * 金額を日本円形式でフォーマットする
 * @param price フォーマットする金額（数値）
 * @returns フォーマットされた金額（文字列）
 * @throws 無効な価格の場合はエラーをスローする
 */
export const formatPrice = (price: number): string => {
  if (typeof price !== "number" || isNaN(price)) {
    throw new Error("無効な価格です。数値を入力してください。");
  }
  return formatter.format(price);
};
