import { useFilter } from "../hooks/useFilter";
import { useFilteredGames } from "../hooks/useFilteredGames";
import { GenreEnum } from "../types/filter-types";
import { CardGame } from "./CardGame";

export const CardGameList = () => {
  const { search, gameBygenre, isLive } = useFilter();
  const { games: gamesByGenre } = useFilteredGames(
    gameBygenre as GenreEnum,
    search as string,
    isLive,
  );

  if (!gamesByGenre.length) {
    return (
      <div className="w-full flex items-center justify-center flex-col">
        <p className="text-yellow-400">
          HMM, WE SEARCHED FAR AND WIDE AND NOTHING TURNED UP.
        </p>
        <p>TRY SOMETHING ELSE!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-center justify-center gap-6 mt-6 md:grid-cols-3">
      {gamesByGenre?.map((game) => (
        <CardGame
          key={game.id}
          id={game.id}
          directory_image_name={game.directory_image_name}
          directory_gif_name={game.directory_gif_name}
          name={game.name}
          is_live={game.is_live}
          genres={game.genres}
        />
      ))}
    </div>
  );
};
