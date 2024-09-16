import { client } from "@/lib/hono";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

/**
 * カテゴリーの一覧を取得する
 * @returns カテゴリーの一覧
 * @throws Error カテゴリー取得に失敗した場合
 */
export const useGetCategories = () => {
  const { getToken } = useAuth();
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const token = await getToken();
      const response = await client.api.categories.$get(
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("カテゴリーの一覧取得に失敗しました");
      }

      const data = await response.json();
      return data;
    },
  });

  return query;
};
