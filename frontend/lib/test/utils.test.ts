import { combineClassNames } from "../utils";

describe("combineClassNames", () => {
  // (1)単一のクラス名を正しく処理する
  it("単一のクラス名を正しく処理する", () => {
    expect(combineClassNames("test-class")).toBe("test-class");
  });

  // (2)複数のクラス名を正しく結合する
  it("複数のクラス名を正しく結合する", () => {
    expect(combineClassNames("class1", "class2")).toBe("class1 class2");
  });

  // (3)条件付きクラスを正しく処理する
  it("条件付きクラスを正しく処理する", () => {
    expect(
      combineClassNames("always", { conditional: true, "not-included": false })
    ).toBe("always conditional");
  });

  // (4)Tailwindの競合するクラスを正しく解決する
  it("Tailwindの競合するクラスを正しく解決する", () => {
    expect(combineClassNames("p-2", "p-4")).toBe("p-4");
  });

  // (5)空の入力を正しく処理する
  it("空の入力を正しく処理する", () => {
    expect(combineClassNames()).toBe("");
  });
});
