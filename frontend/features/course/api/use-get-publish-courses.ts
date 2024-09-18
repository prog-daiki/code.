import { client } from "@/lib/hono";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

export const useGetPublishCourses = ({
  title,
  categoryId,
}: {
  title: string;
  categoryId: string;
}) => {
  const { getToken } = useAuth();
  const query = useQuery({
    queryKey: ["courses", title, categoryId],
    queryFn: async () => {
      const token = await getToken();
      const response = await client().api.courses.publish.$get(
        {
          query: {
            title,
            categoryId,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("公開講座の一覧取得に失敗しました");
      }

      const data = await response.json();
      return data;
    },
  });

  return query;
};
