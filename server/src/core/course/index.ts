import { Hono } from "hono";
import type { Env } from "../../../app";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { getAuth } from "@hono/clerk-auth";
import { HandleError } from "../../error/HandleError";
import { CourseUseCase } from "./useCase";

const Course = new Hono<{
  Bindings: Env;
  Variables: {
    courseUseCase: CourseUseCase;
  };
}>()
  .use("*", async (c, next) => {
    c.set("courseUseCase", new CourseUseCase());
    await next();
  })
  /**
   * 公開講座一覧取得API
   */
  .get(
    "/publish",
    zValidator(
      "query",
      z.object({
        title: z.string().optional(),
        categoryId: z.string().optional(),
      })
    ),
    async (c) => {
      const courseUseCase = c.get("courseUseCase");
      const validatedData = c.req.valid("query");
      const auth = getAuth(c);
      try {
        const courses = await courseUseCase.getPublishCourses(
          validatedData.title,
          validatedData.categoryId,
          auth!.userId!
        );
        return c.json(courses);
      } catch (error) {
        return HandleError(c, error, "公開講座一覧取得エラー");
      }
    }
  );

export default Course;
