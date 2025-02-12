import { ChangeEvent } from "react";
import { useFilter } from "../hooks/useFilter";

interface SearchInputProps {
  placeholder: string;
  onSearch: (search: string) => void;
}

export const SearchInput = ({
  placeholder = "Search...",
  onSearch,
}: SearchInputProps) => {
  const { search, setSearch } = useFilter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className=" w-full flex items-center justify-between border-[1px] border-yellow-400 rounded-md px-2 py-1 md:w-96">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleInputChange}
        className="w-full bg-transparent outline-none text-white"
      />
      <button
        className="bg-gray-500 p-2 rounded-lg text-white  hover: transition-all duration-300 ease-in-out hover:scale-110 hover:bg-yellow-400"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
