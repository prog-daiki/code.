import Link from "next/link";
import { Button } from "../ui/button";

export const HeaderNav = () => {
  return (
    <nav className="flex space-x-4 text-muted-foreground text-sm">
      <Link href="/courses">
        <Button variant="ghost">Courses</Button>
      </Link>
      <Link href="/articles">
        <Button variant="ghost">Articles</Button>
      </Link>
      <Link href="/pricing">
        <Button variant="ghost">Pricing</Button>
      </Link>
      <Link href="/dashboard">
        <Button variant="ghost">Dashboard</Button>
      </Link>
    </nav>
  );
};
