import { and, desc, eq, ilike, sql } from "drizzle-orm";
import { db } from "../../../../db/drizzle";
import { category, chapter, course, purchase } from "../../../../db/schema";

export class CourseRepository {
  /**
   * 公開講座を一覧取得する
   * @param title
   * @param categoryId
   * @returns
   */
  async getPublishCourses(
    title?: string,
    categoryId?: string,
    userId?: string
  ) {
    const data = await db
      .select({
        course,
        category,
        chapters: sql<
          (typeof chapter)[]
        >`coalesce(json_agg(${chapter}) filter (where ${chapter.id} is not null), '[]')`.as(
          "chapters"
        ),
        purchased:
          sql<boolean>`case when ${purchase.id} is not null then true else false end`.as(
            "purchased"
          ),
      })
      .from(course)
      .leftJoin(chapter, eq(course.id, chapter.courseId))
      .leftJoin(category, eq(course.categoryId, category.id))
      .leftJoin(
        purchase,
        and(
          eq(course.id, purchase.courseId),
          userId ? eq(purchase.userId, userId) : undefined
        )
      )
      .where(
        and(
          eq(course.publishFlag, true),
          eq(chapter.publishFlag, true),
          title ? ilike(course.title, `%${title}%`) : undefined,
          categoryId ? eq(course.categoryId, categoryId) : undefined
        )
      )
      .groupBy(course.id, category.id, purchase.id)
      .orderBy(desc(course.createDate));
    return data;
  }
}
