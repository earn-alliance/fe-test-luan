import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SearchInput } from "../components/SearchInput";
import { useFilter } from "../hooks/useFilter";

// Mock do hook useFilter
vi.mock("../hooks/useFilter", () => {
  return {
    useFilter: vi.fn(() => ({ search: "", setSearch: vi.fn() })),
  };
});

describe("SearchInput Component", () => {
  it("deve permitir que o usuário digite no input", () => {
    const setSearchMock = vi.fn();
    (useFilter as jest.Mock).mockReturnValue({
      search: "",
      setSearch: setSearchMock,
    });

    render(<SearchInput placeholder="Search..." />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });

    expect(setSearchMock).toHaveBeenCalledWith("Hello");
  });

  it("deve garantir que o input esteja funcionando corretamente", () => {
    const setSearchMock = vi.fn();
    (useFilter as jest.Mock).mockReturnValue({
      search: "Test",
      setSearch: setSearchMock,
    });

    render(<SearchInput placeholder="Search..." />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("Test");
  });
});
