/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  gameBygenre: "",
  isLive: true,

  setSearch: (value: string) => {},
  setGameByGenre: (value: string) => {},
  setIsLive: (value: boolean) => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [gameBygenre, setGameByGenre] = useState("");
  const [isLive, setIsLive] = useState(true);

  return (
    <FilterContext.Provider
      value={{
        search,
        gameBygenre,
        isLive,
        setSearch,
        setGameByGenre,
        setIsLive,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
