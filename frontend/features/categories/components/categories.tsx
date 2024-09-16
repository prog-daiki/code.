"use client";

import { CategoryItem } from "./category-item";
import { useGetCategories } from "../api/use-get-categories";
import { Skeleton } from "@/components/ui/skeleton";

export const Categories = () => {
  const categoriesQuery = useGetCategories();
  const categories = categoriesQuery.data || [];

  if (categoriesQuery.isLoading) {
    return (
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <Skeleton className="h-[38px] w-[80px]" />
        <Skeleton className="h-[38px] w-[80px]" />
        <Skeleton className="h-[38px] w-[80px]" />
        <Skeleton className="h-[38px] w-[80px]" />
        <Skeleton className="h-[38px] w-[80px]" />
        <Skeleton className="h-[38px] w-[80px]" />
        <Skeleton className="h-[38px] w-[80px]" />
        <Skeleton className="h-[38px] w-[80px]" />
        <Skeleton className="h-[38px] w-[80px]" />
        <Skeleton className="h-[38px] w-[80px]" />
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          label={category.name}
          value={category.id}
        />
      ))}
    </div>
  );
};
