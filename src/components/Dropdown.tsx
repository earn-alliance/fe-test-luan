import React, { useState, useEffect, useRef } from "react";
import { useListGameCategory } from "../hooks/useListGameCategory";
import { useFilter } from "../hooks/useFilter";

export const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { data: genres } = useListGameCategory();
  const { gameBygenre, setGameByGenre } = useFilter();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionClick = (value: string) => {
    closeDropdown();
    setGameByGenre(value);
  };

  return (
    <div
      className="w-full relative inline-block text-left z-10"
      ref={dropdownRef}
    >
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border  border-yellow-300 shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-white hover:bg-custom-yellow transition duration-500"
          onClick={toggleDropdown}
        >
          {gameBygenre || "Select Genre"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {genres?.map((genre) => {
              return (
                <button
                  value={genre.genre_name}
                  key={genre.genre_name}
                  className="w-full text-left block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-yellow-200"
                  onClick={() => handleOptionClick(genre.genre_name)}
                >
                  {genre?.genre_name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
