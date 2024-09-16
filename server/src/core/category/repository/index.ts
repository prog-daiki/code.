import { category } from "../../../../db/schema";
import { asc } from "drizzle-orm";
import { db } from "../../../../db/drizzle";

/**
 * カテゴリーのリポジトリを管理するクラス
 */
export class CategoryRepository {
  /**
   * カテゴリーを一覧取得する
   * @returns
   */
  async getCategories() {
    const data = await db.select().from(category).orderBy(asc(category.name));
    return data;
  }
}
