import { formatJapaneseYen } from "../format-price";

describe("formatJapaneseYen", () => {
  test("正の整数を正しくフォーマットする", () => {
    expect(formatJapaneseYen(1000)).toBe("¥1,000");
    expect(formatJapaneseYen(1234567)).toBe("¥1,234,567");
  });

  test("小数点以下の金額を正しくフォーマットする", () => {
    expect(formatJapaneseYen(1000.5)).toBe("¥1,001");
    expect(formatJapaneseYen(1234.56)).toBe("¥1,235");
  });

  test("0を正しくフォーマットする", () => {
    expect(formatJapaneseYen(0)).toBe("¥0");
  });

  test("大きな数値を正しくフォーマットする", () => {
    expect(formatJapaneseYen(1000000000)).toBe("¥1,000,000,000");
  });

  test("負の数値でエラーをスローする", () => {
    expect(() => formatJapaneseYen(-1000)).toThrow(
      "無効な価格です。正の数値を入力してください。"
    );
  });

  test("NaNでエラーをスローする", () => {
    expect(() => formatJapaneseYen(NaN)).toThrow(
      "無効な価格です。正の数値を入力してください。"
    );
  });

  test("Infinityでエラーをスローする", () => {
    expect(() => formatJapaneseYen(Infinity)).toThrow(
      "無効な価格です。正の数値を入力してください。"
    );
  });

  test("文字列型の数値でエラーをスローする", () => {
    expect(() => formatJapaneseYen("1000" as any)).toThrow(
      "無効な価格です。正の数値を入力してください。"
    );
  });
});
