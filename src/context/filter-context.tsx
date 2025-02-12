/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  category: "",
  setSearch: (value: string) => {},
  setCategory: (value: string) => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <FilterContext.Provider
      value={{ search, category, setSearch, setCategory }}
    >
      {children}
    </FilterContext.Provider>
  );
}
