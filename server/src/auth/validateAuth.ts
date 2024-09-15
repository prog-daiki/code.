import { getAuth } from "@hono/clerk-auth";
import type { Context, Next } from "hono";
import { Messages } from "../common/message";

/**
 * 認証済みのユーザーであることを確認する
 * @param c
 * @param next
 * @returns
 */
export const validateAuth = async (c: Context, next: Next) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    return c.json({ error: Messages.MSG_ERR_001 }, 401);
  }
  c.set("userId", auth.userId);
  await next();
};
