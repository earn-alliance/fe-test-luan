import { Dropdown } from "./Dropdown";
import { SearchInput } from "./SearchInput";
import { Toggle } from "./Toggle";
import { useFilter } from "../hooks/useFilter";

export const Filter = () => {
  const { search, setSearch, setGameByGenre, setIsLive } = useFilter();

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
  };

  const handleResetFilter = () => {
    setSearch("");
    setGameByGenre("");
    setIsLive(false);
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

      <div className="flex items-center justify-start">
        <Toggle trueLabel="Live" falseLabel="Offline" />
      </div>

      <div className="w-full flex items-center justify-center gap-2">
        <Dropdown />
        <button
          className="w-24 flex items-center justify-center  border-2 border-yellow-500 rounded-md p-1 hover:bg-yellow-400 text-white transition duration-500"
          onClick={() => handleResetFilter()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
