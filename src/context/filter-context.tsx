/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  gameBygenre: "",
  setSearch: (value: string) => {},
  setGameByGenre: (value: string) => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [gameBygenre, setGameByGenre] = useState("");

  return (
    <FilterContext.Provider
      value={{ search, gameBygenre, setSearch, setGameByGenre }}
    >
      {children}
    </FilterContext.Provider>
  );
}
