import { CategoryRepository } from "../repository";

/**
 * カテゴリーのuseCaseを管理するクラス
 */
export class CategoryUseCase {
  private categoryRepository: CategoryRepository;
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  /**
   * カテゴリー一覧を取得する
   * @returns カテゴリー一覧
   */
  async getCategories() {
    const categories = await this.categoryRepository.getCategories();
    return categories;
  }
}
