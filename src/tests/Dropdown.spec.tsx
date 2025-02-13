import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, vi } from "vitest";
import { Dropdown } from "../components/Dropdown";

vi.mock("../hooks/useListGameCategory", () => ({
  useListGameCategory: () => ({
    data: [
      { genre_name: "Action" },
      { genre_name: "Adventure" },
      { genre_name: "RPG" },
    ],
  }),
}));

vi.mock("../hooks/useFilter", () => ({
  useFilter: () => ({
    gameBygenre: "",
    setGameByGenre: vi.fn(),
  }),
}));

describe("Dropdown Component", () => {
  test("should open dropdown when clicked", async () => {
    render(<Dropdown />);
    const button = screen.getByRole("button", { name: /select genre/i });

    await userEvent.click(button);

    expect(screen.getByText("Action")).toBeVisible();
    expect(screen.getByText("Adventure")).toBeVisible();
    expect(screen.getByText("RPG")).toBeVisible();
  });

  it("should close dropdown when clicking outside", async () => {
    render(<Dropdown />);
    const button = screen.getByRole("button", { name: /select genre/i });

    await userEvent.click(button);
    expect(screen.getByText("Action")).toBeVisible();

    await userEvent.click(document.body);

    expect(screen.queryByText("Action")).not.toBeInTheDocument();
  });

  it("should close dropdown when clicking an option", async () => {
    render(<Dropdown />);
    const button = screen.getByRole("button", { name: /select genre/i });

    await userEvent.click(button);
    const option = screen.getByText("Action");

    await userEvent.click(option);

    expect(screen.queryByText("Action")).not.toBeInTheDocument();
  });
});
