import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="w-full border-b py-4 px-6">
      <div className="w-full max-w-[1400px] mx-auto ">
        <Logo />
      </div>
    </header>
  );
};
