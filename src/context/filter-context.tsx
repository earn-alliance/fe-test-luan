/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";
import { FilterType } from "../types/filter-types";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.FPS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.FPS);

  return (
    <FilterContext.Provider
      value={{ search, page, type, setSearch, setType, setPage }}
    >
      {children}
    </FilterContext.Provider>
  );
}
