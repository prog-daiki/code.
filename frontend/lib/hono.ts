import { hc } from "hono/client";
import { type AppType } from "../../server/app";

export type HonoClient = ReturnType<typeof hc<AppType>>;
export const client = hc<AppType>("/") as HonoClient;
