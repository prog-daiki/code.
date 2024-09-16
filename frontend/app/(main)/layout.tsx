import { SearchInput } from "@/components/search-input";
import { Categories } from "@/features/category/components/categories";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <Categories />
      <SearchInput />
      {children}
    </div>
  );
};

export default MainLayout;
