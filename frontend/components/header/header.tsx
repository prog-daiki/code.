import { HeaderNav } from "./header-nav";
import { LoginButton } from "./login-button";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="w-full border-b py-4 px-6">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Logo />
          <HeaderNav />
        </div>
        <LoginButton />
      </div>
    </header>
  );
};
