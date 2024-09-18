/**
 * 日本円のフォーマッター
 */
const JPY_FORMATTER = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

/**
 * 金額を日本円形式でフォーマットする
 * @param price フォーマットする金額（数値）
 * @returns フォーマットされた金額（文字列）
 * @throws {Error} 無効な価格の場合
 */
export const formatJapaneseYen = (price: number): string => {
  if (!isValidPrice(price)) {
    throw new Error("無効な価格です。正の数値を入力してください。");
  }
  return JPY_FORMATTER.format(price);
};

/**
 * 価格が有効かどうかを確認する
 * @param price 確認する価格
 * @returns 価格が有効な場合はtrue、そうでない場合はfalse
 */
const isValidPrice = (price: number): boolean => {
  return typeof price === "number" && isFinite(price) && price >= 0;
};
