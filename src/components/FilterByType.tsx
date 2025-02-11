import { useFilter } from "../hooks/useFilter";
import { FilterType } from "../types/filter-types";
import { FilterItem } from "./FilterItem";
import { FilterList } from "./FilterList";

export const FilterByType = () => {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.FPS}
        onClick={() => handleChangeType(FilterType.FPS)}
      >
        FPS
      </FilterItem>
      <FilterItem
        selected={type === FilterType.RPG}
        onClick={() => handleChangeType(FilterType.RPG)}
      >
        RPG
      </FilterItem>
      <FilterItem
        selected={type === FilterType.RTS}
        onClick={() => handleChangeType(FilterType.RTS)}
      >
        RTS
      </FilterItem>
    </FilterList>
  );
};
