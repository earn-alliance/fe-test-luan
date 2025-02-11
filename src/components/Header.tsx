import { Dropdown } from "./Dropdown";
import { SearchInput } from "./SearchInput";

export const Header = () => {
  const handleSearch = (searchTerm: string) => {
    // Dispatch search action here

    console.log("Searching for:", searchTerm);
  };

  return (
    <header className="w-full h-[4rem] bg-gray-600 flex items-center justify-around ">
      <div>LOGO</div>
      <Dropdown />
      <SearchInput
        placeholder="Search for a game by name..."
        onSearch={handleSearch}
      />
    </header>
  );
};
