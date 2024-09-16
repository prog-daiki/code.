"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";

type CategoryItemProps = {
  label: string;
  value: string;
};

export const CategoryItem = ({ label, value }: CategoryItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const isSelected = currentCategoryId === value;

  const handleClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          categoryId: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <button
      className={cn(
        "py-2 px-3 text-sm border border-slate-200 rounded-md flex items-center gap-x-1 hover:border-sky-7000 transition",
        isSelected && "border-sky-700 bg-sky-200/20 text-sky-800"
      )}
      onClick={handleClick}
    >
      <div className="truncate">{label}</div>
    </button>
  );
};
