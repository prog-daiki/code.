import { clerkMiddleware } from "@hono/clerk-auth";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";
import Category from "./src/core/category";
import Course from "./src/core/course";

export type Env = {
  DATABASE_URL: string;
  ADMIN_USER_ID: string;
  MUX_TOKEN_ID: string;
  MUX_TOKEN_SECRET: string;
  STRIPE_API_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
};

const app = new Hono<{ Bindings: Env }>();

app.use(
  "*",
  cors({
    origin: ["http://localhost:3000"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
  logger(),
  clerkMiddleware()
);

app.use(
  "/api/*",
  csrf({
    origin: "http://localhost:3000",
  })
);

const apiRoutes = app
  .route("/api/categories", Category)
  .route("/api/courses", Course);

export default app;
export type AppType = typeof apiRoutes;
