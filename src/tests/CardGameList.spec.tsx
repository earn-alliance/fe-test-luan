import { render, screen } from "@testing-library/react";
import * as useFilteredGamesModule from "../hooks/useFilteredGames"; // Importar o módulo completo
import { GenreEnum } from "../types/filter-types";
import { vi } from "vitest";
import { CardGameList } from "../components/CardGameList";

vi.mock("../hooks/useFilter", () => ({
  useFilter: () => ({
    search: "",
    gameBygenre: GenreEnum.ARPG,
    setIsLive: vi.fn(),
    isLive: false,
  }),
}));

vi.mock("../hooks/useFilteredGames", () => ({
  useFilteredGames: () => ({
    games: [],
    isLoading: false,
    isError: false,
  }),
}));

describe("CardGameList", () => {
  it("Should shows the load state", () => {
    vi.spyOn(useFilteredGamesModule, "useFilteredGames").mockReturnValue({
      games: [],
      isLoading: true,
      isError: false,
    });

    render(<CardGameList />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("Should shows a message saiyng that hasn't no games", () => {
    vi.spyOn(useFilteredGamesModule, "useFilteredGames").mockReturnValue({
      games: [],
      isLoading: false,
      isError: false,
    });

    render(<CardGameList />);

    expect(
      screen.getByText(/HMM, WE SEARCHED FAR AND WIDE AND NOTHING TURNED UP./i),
    ).toBeInTheDocument();
    expect(screen.getByText(/TRY SOMETHING ELSE!/i)).toBeInTheDocument();
  });

  it("Should render CardGame components when games are available", () => {
    const mockGames = [
      {
        id: "1",
        name: "Game 1",
        directory_image_name: "game1.jpg",
        directory_gif_name: "game1.gif",
        genres: [{ genre_name: "Action" }],
        is_live: true,
      },
      {
        id: "2",
        name: "Game 2",
        directory_image_name: "game2.jpg",
        directory_gif_name: "game2.gif",
        genres: [{ genre_name: "Adventure" }],
        is_live: false,
      },
    ];

    vi.spyOn(useFilteredGamesModule, "useFilteredGames").mockReturnValue({
      games: mockGames,
      isLoading: false,
      isError: false,
    });

    render(<CardGameList />);

    expect(screen.getAllByText("Game 1")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Game 2")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Live")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Offline")[0]).toBeInTheDocument();
  });
});
