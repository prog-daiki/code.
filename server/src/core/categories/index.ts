import { Hono } from "hono";
import type { Env } from "../../../app";
import { HandleError } from "../../error/HandleError";
import { validateAuth } from "../../auth/validateAuth";
import { CategoryUseCase } from "./useCase";

const Category = new Hono<{
  Bindings: Env;
  Variables: {
    categoryUseCase: CategoryUseCase;
  };
}>()
  .use("*", async (c, next) => {
    c.set("categoryUseCase", new CategoryUseCase());
    await next();
  })
  /**
   * カテゴリー一覧取得API
   */
  .get("/", validateAuth, async (c) => {
    const categoryUseCase = c.get("categoryUseCase");
    try {
      const categories = await categoryUseCase.getCategories();
      return c.json(categories);
    } catch (error) {
      return HandleError(c, error, "カテゴリー一覧取得エラー");
    }
  });

export default Category;
