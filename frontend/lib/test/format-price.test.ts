import { formatPrice } from "../format-price";

describe("formatPrice", () => {
  /**
   * (1) 正の整数を正しくフォーマットする
   */
  it("正の整数を正しくフォーマットする", () => {
    expect(formatPrice(1000)).toBe("¥1,000");
    expect(formatPrice(1234567)).toBe("¥1,234,567");
  });

  /**
   * (2) 小数点以下の金額を正しくフォーマットする
   */
  it("小数点以下の金額を正しくフォーマットする", () => {
    expect(formatPrice(1000.5)).toBe("¥1,001");
    expect(formatPrice(1234.56)).toBe("¥1,235");
  });

  /**
   * (3) 0をフォーマットする
   */
  it("0をフォーマットする", () => {
    expect(formatPrice(0)).toBe("¥0");
  });

  /**
   * (4) 負の数に対してエラーをスローする
   */
  it("負の数に対してエラーをスローする", () => {
    expect(() => formatPrice(-1000)).toThrow(
      "無効な価格です。数値を入力してください。"
    );
    expect(() => formatPrice(-1234.56)).toThrow(
      "無効な価格です。数値を入力してください。"
    );
  });

  /**
   * (5) 無効な入力に対してエラーをスローする
   */
  it("無効な入力に対してエラーをスローする", () => {
    expect(() => formatPrice(NaN)).toThrow(
      "無効な価格です。数値を入力してください。"
    );
    expect(() => formatPrice(Infinity)).toThrow(
      "無効な価格です。数値を入力してください。"
    );
  });
});
