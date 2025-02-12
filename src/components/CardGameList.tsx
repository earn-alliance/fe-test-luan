import { useFilter } from "../hooks/useFilter";
import { useFilteredGames } from "../hooks/useFilteredGames";
import { useFindGameByName } from "../hooks/useFindGameByName";
import { GenreEnum } from "../types/filter-types";
import { CardGame } from "./CardGame";

export const CardGameList = () => {
  const { search, gameBygenre, isLive } = useFilter();
  const { data: gamesByName } = useFindGameByName(search);
  const { data: gamesByGenre } = useFilteredGames(
    gameBygenre as GenreEnum,
    search as string,
    isLive,
  );

  const hasGamesByName = gamesByName && gamesByName.length > 0;
  const hasGamesByGenre = gamesByGenre && gamesByGenre.length > 0;

  const renderGames = () => {
    if (gameBygenre && hasGamesByGenre) {
      return (
        <div className="grid grid-cols-1 items-center justify-center gap-4 mt-6 md:grid-cols-3">
          {gamesByGenre.map((game) => (
            <CardGame
              key={game.id}
              id={game.id}
              directory_image_name={game.directory_image_name}
              directory_gif_name={game.directory_gif_name}
              name={game.name}
            />
          ))}
        </div>
      );
    } else if (hasGamesByName) {
      return (
        <div className="grid grid-cols-1 items-center justify-center gap-4 mt-6 md:grid-cols-3">
          {gamesByName.map((game) => (
            <CardGame
              key={game.id}
              id={game.id}
              directory_image_name={game.directory_image_name}
              directory_gif_name={game.directory_gif_name}
              name={game.name}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center pb-10">
          <p className="text-yellow-400 mb-4">
            HMM, WE SEARCHED FAR AND WIDE AND NOTHING TURNED UP.
          </p>
          <p>TRY SOMETHING ELSE!</p>
        </div>
      );
    }
  };

  return <>{renderGames()}</>;
};
