"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";
import { useCallback, useMemo } from "react";

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

  const isSelected = useMemo(
    () => currentCategoryId === value,
    [currentCategoryId, value]
  );

  const handleClick = useCallback(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          categoryId: isSelected ? undefined : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  }, [pathname, currentTitle, isSelected, value, router]);

  return (
    <button
      className={cn(
        "py-2 px-3 text-sm border border-slate-200 rounded-md flex items-center gap-x-1 hover:border-sky-7000 transition",
        {
          "border-sky-700 bg-gray-100": isSelected,
        }
      )}
      onClick={handleClick}
    >
      <div className="truncate">{label}</div>
    </button>
  );
};
