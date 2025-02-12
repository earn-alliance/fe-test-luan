import { useEffect } from "react";
import { useFilter } from "../hooks/useFilter";
import { useFilteredGames } from "../hooks/useFilteredGames";
import { GenreEnum } from "../types/filter-types";
import { CardGame } from "./CardGame";

export const CardGameList = () => {
  const { search, gameBygenre, setIsLive, isLive } = useFilter();
  const { games: gamesByGenre, isLoading } = useFilteredGames(
    gameBygenre as GenreEnum,
    search as string,
    isLive,
  );

  useEffect(() => {
    setIsLive(false);
  }, [setIsLive]);

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-white text-xl font-bold">Loading...</p>
      </div>
    );
  }

  if (!gamesByGenre.length) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-yellow-400">
          HMM, WE SEARCHED FAR AND WIDE AND NOTHING TURNED UP.
        </p>
        <p>TRY SOMETHING ELSE!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mx-5">
      {gamesByGenre?.map((game) => <CardGame key={game.id} {...game} />)}
    </div>
  );
};
