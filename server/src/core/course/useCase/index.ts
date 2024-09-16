import { CourseRepository } from "../repository";

export class CourseUseCase {
  private courseRepository: CourseRepository;
  constructor() {
    this.courseRepository = new CourseRepository();
  }

  /**
   * 公開講座一覧を取得する
   * @param title タイトル
   * @param categoryId カテゴリーID
   * @returns 公開講座一覧
   */
  async getPublishCourses(
    title?: string,
    categoryId?: string,
    userId?: string
  ) {
    const courses = await this.courseRepository.getPublishCourses(
      title,
      categoryId,
      userId
    );
    return courses;
  }
}
