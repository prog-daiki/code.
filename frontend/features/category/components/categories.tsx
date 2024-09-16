"use client";

import { CategoryItem } from "./category-item";
import { useGetCategories } from "../api/use-get-categories";
import { Skeleton } from "@/components/ui/skeleton";

const CategoriesSkeleton = () => {
  const skeletonCount = 10;
  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Skeleton key={index} className="h-[38px] w-[80px]" />
      ))}
    </div>
  );
};

export const Categories = () => {
  const { data: categories = [], isLoading, isError } = useGetCategories();

  if (isLoading) {
    return <CategoriesSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-red-500">
        カテゴリーの読み込み中にエラーが発生しました。
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2">
      {categories.map(({ id, name }) => (
        <CategoryItem key={id} label={name} value={id} />
      ))}
    </div>
  );
};
