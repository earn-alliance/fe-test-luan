import { useEffect, useState } from "react";
import { Game } from "../types/games-response";

export const CardGame = ({
  name,
  directory_image_name,
  directory_gif_name,
  genres = [],
  is_live,
}: Game) => {
  const [isHovered, setIsHovered] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);

  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ipsum itaque repellendus voluptates ratione! Iste quo asperiores dolorum adipisci sapiente deserunt";

  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = `/images/${directory_gif_name}`;
    gifImage.onload = () => setGifLoaded(true);
  }, [directory_gif_name]);

  return (
    <div
      className="relative overflow-hidden w-full h-[300px] flex flex-col border-2 border-[#fdd987] cursor-pointer transition-all rounded-md
      duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow hover:outline hover:outline-2 hover:outline-[#fdd987]  z-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="object-cover w-full h-full transition-opacity duration-300"
        src={
          isHovered && gifLoaded
            ? `/images/${directory_gif_name}`
            : `/images/${directory_image_name}`
        }
        alt={name}
      />

      <div className="absolute bottom-0 inset-x-0 p-2 text-white text-sm bg-[#476072] transition-opacity duration-1000 ease-out">
        <div className="flex flex-col">
          {is_live ? (
            <p className="text-green-500 font-bold text-xl">Live</p>
          ) : (
            <p className="text-white font-bold text-lg">Offline</p>
          )}

          <p className="text-white text-lg font-bold">{name}</p>

          <div className="flex items-center gap-3 border-custom-yellow p-1 rounded-md">
            {genres?.map((genre) => (
              <span
                key={genre?.genre_name}
                className="text-md text-custom-yellow"
              >
                {genre?.genre_name},
              </span>
            ))}
          </div>
        </div>
      </div>

      {isHovered && (
        <div className="absolute bottom-0 inset-0 bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>
      )}

      <div
        className={`absolute w-full bottom-0 p-2 text-white text-sm transition-opacity duration-300 ease-in bg-[#476072] h-32 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white text-xl font-bold mb-2">{name}</p>

        <p className="text-custom-yellow text-base font-semibold">
          {truncatedDescription}
        </p>
      </div>
    </div>
  );
};
