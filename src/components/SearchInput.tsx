import { ChangeEvent, FC } from "react";
import { useFilter } from "../hooks/useFilter";

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput: FC<SearchInputProps> = ({
  placeholder = "Search...",
}) => {
  const { search, setSearch } = useFilter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className=" w-full flex items-center border-[1px] border-yellow-400 rounded-md px-2 py-1 md:w-96">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleInputChange}
        className="w-full bg-transparent outline-none text-white"
        aria-label="Search input"
      />
      <button disabled aria-label="Search button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-yellow-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};
