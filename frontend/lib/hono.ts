import { hc } from "hono/client";
import { type AppType } from "../../server/app";

/**
 * APIクライアントを初期化する関数
 * @throws {Error} API_URLが設定されていない場合
 * @returns {ReturnType<typeof hc<AppType>>} 初期化されたAPIクライアント
 */
export const initializeApiClient = (): ReturnType<typeof hc<AppType>> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) {
    throw new Error(
      "NEXT_PUBLIC_API_URLが設定されていません。環境変数を確認してください。"
    );
  }

  return hc<AppType>(API_URL);
};

export const client = (): ReturnType<typeof hc<AppType>> => {
  return initializeApiClient();
};
