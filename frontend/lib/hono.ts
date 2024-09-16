import { hc } from "hono/client";
import { type AppType } from "../../server/app";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_API_URL!);
