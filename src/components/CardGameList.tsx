import { useGameList } from "../hooks/useGamesList";
import { CardGame } from "./CardGame";

export const CardGameList = () => {
  const { data: games } = useGameList();

  return (
    <div className="grid grid-cols-1 items-center justify-center gap-4 mt-6 md:grid-cols-3   ">
      {games?.map((game) => {
        return (
          <CardGame
            key={game?.id}
            id={game?.id}
            directory_image_name={game.directory_image_name}
            directory_gif_name={game.directory_gif_name}
            name={game.name}
          />
        );
      })}
    </div>
  );
};
