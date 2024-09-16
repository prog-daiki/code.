import { hc } from "hono/client";
import { type AppType } from "../../server/app";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URLが設定されていません");
}

export const client = hc<AppType>(API_URL);
