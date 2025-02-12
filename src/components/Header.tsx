import { useFilter } from "../hooks/useFilter";
import { Dropdown } from "./Dropdown";
import { SearchInput } from "./SearchInput";

export const Header = () => {
  const { setSearch } = useFilter();

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
  };

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
        <div className="flex gap-4">
          <SearchInput
            placeholder="Search for a game by name..."
            onSearch={handleSearch}
          />
          <Dropdown />
        </div>
      </div>
    </header>
  );
};
