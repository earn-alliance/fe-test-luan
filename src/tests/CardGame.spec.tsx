import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CardGame } from "../components/CardGame";
import { Game } from "../types/games-response";

const mockGame: Game = {
  id: "1",
  name: "Test Game",
  directory_image_name: "test-image.jpg",
  directory_gif_name: "test-gif.gif",
  genres: [{ genre_name: "Action" }, { genre_name: "Adventure" }],
  is_live: true,
};

describe("CardGame Component", () => {
  it("renders the game name and status correctly", () => {
    render(<CardGame {...mockGame} />);

    expect(screen.getAllByText("Test Game")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Live")[0]).toBeInTheDocument();
  });

  it("renders genres correctly", () => {
    render(<CardGame {...mockGame} />);

    expect(screen.getByText("Action,")).toBeInTheDocument();
    expect(screen.getByText("Adventure,")).toBeInTheDocument();
  });

  it("displays the correct image initially", () => {
    render(<CardGame {...mockGame} />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", "/images/test-image.jpg");
  });
});
