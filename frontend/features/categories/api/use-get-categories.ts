import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

const fetchCategories = async () => {
  const response = await client.api.categories.$get();

  if (!response.ok) {
    throw new Error("カテゴリーの一覧取得に失敗しました");
  }

  return response.json();
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
