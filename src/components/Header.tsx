import Logo from "./Logo";

export const Header = () => {
  return (
    <header className="w-full h-[4rem] bg-gray-800 flex items-center justify-around p-4 shadow-md">
      <div className="w-full flex items-center justify-between">
        <div className="w-24 h-14 mt-4">
          <Logo />
        </div>
      </div>
    </header>
  );
};
