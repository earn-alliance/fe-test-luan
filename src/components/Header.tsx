export const Header = () => {
  return (
    <header className="w-full h-[4rem] bg-gray-800 flex items-center justify-around ">
      <div className="w-[70%] flex items-center justify-between">
        <div className="w-24 h-14">
          <img
            className="w-full h-full"
            src="/images/logo.svg"
            alt="Alpha Logo"
          />
        </div>
      </div>
    </header>
  );
};
