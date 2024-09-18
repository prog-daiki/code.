import { formatJapaneseYen } from "../format-price";

describe("formatJapaneseYen", () => {
  // (1) 正の整数を正しくフォーマットする
  test("正の整数を正しくフォーマットする", () => {
    expect(formatJapaneseYen(1000)).toBe("¥1,000");
    expect(formatJapaneseYen(1234567)).toBe("¥1,234,567");
  });

  // (2) 小数点以下の金額を正しくフォーマットする
  test("小数点以下の金額を正しくフォーマットする", () => {
    expect(formatJapaneseYen(1000.5)).toBe("¥1,001");
    expect(formatJapaneseYen(1234.56)).toBe("¥1,235");
  });

  // (3) 0を正しくフォーマットする
  test("0を正しくフォーマットする", () => {
    expect(formatJapaneseYen(0)).toBe("¥0");
  });

  // (4) 大きな数値を正しくフォーマットする
  test("大きな数値を正しくフォーマットする", () => {
    expect(formatJapaneseYen(1000000000)).toBe("¥1,000,000,000");
  });

  // (5) 負の数値でエラーをスローする
  test("負の数値でエラーをスローする", () => {
    expect(() => formatJapaneseYen(-1000)).toThrow(
      "無効な価格です。正の数値を入力してください。"
    );
  });

  // (6) NaNでエラーをスローする
  test("NaNでエラーをスローする", () => {
    expect(() => formatJapaneseYen(NaN)).toThrow(
      "無効な価格です。正の数値を入力してください。"
    );
  });

  // (7) Infinityでエラーをスローする
  test("Infinityでエラーをスローする", () => {
    expect(() => formatJapaneseYen(Infinity)).toThrow(
      "無効な価格です。正の数値を入力してください。"
    );
  });

  // (8) 文字列型の数値でエラーをスローする
  test("文字列型の数値でエラーをスローする", () => {
    expect(() => formatJapaneseYen("1000" as any)).toThrow(
      "無効な価格です。正の数値を入力してください。"
    );
  });
});
