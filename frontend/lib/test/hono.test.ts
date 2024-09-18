import { initializeApiClient } from "../hono";

describe("initializeApiClient", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  // (1) 環境変数が設定されている場合
  it("APIクライアントを正しく初期化する", () => {
    process.env.NEXT_PUBLIC_API_URL = "https://api.example.com";
    const client = initializeApiClient();
    expect(client).toBeDefined();
  });

  // (2) 環境変数が設定されていない場合
  it("NEXT_PUBLIC_API_URLが設定されていない場合にエラーをスローする", () => {
    delete process.env.NEXT_PUBLIC_API_URL;
    expect(() => initializeApiClient()).toThrow(
      "NEXT_PUBLIC_API_URLが設定されていません。環境変数を確認してください。"
    );
  });
});
