import React from "react";

interface FilterItemProps {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export const FilterItem = ({ children }: FilterItemProps) => {
  return <>{children}</>;
};
