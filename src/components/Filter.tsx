import { Dropdown } from "./Dropdown";
import { SearchInput } from "./SearchInput";
import { Toggle } from "./Toggle";
import { useFilter } from "../hooks/useFilter";

export const Filter = () => {
  const { search, setSearch } = useFilter();

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="text-white font-bold">
        Search result:{" "}
        <span className="text-yellow-400 font-bold">{search}</span>
      </p>
      <SearchInput
        placeholder="Search for a game by name..."
        onSearch={handleSearch}
      />
      <Toggle trueLabel="In Live" falseLabel="No Live" />
      <Dropdown />
    </div>
  );
};
