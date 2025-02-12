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
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ipsum itaque repellendus voluptates ratione! Iste quo asperiores dolorum adipisci sapiente deserunt, modi illo, ad neque ab tenetur voluptate, voluptatibus quasi.";

  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = `/images/${directory_gif_name}`;
    gifImage.onload = () => setGifLoaded(true);
  }, [directory_gif_name]);

  return (
    <div
      className="relative overflow-hidden w-[26.8125rem] h-[15.5625rem] flex 
      flex-col border-2 border-yellow-300 cursor-pointer transition-all rounded-md
      duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow 
      hover:outline hover:outline-2 hover:outline-yellow-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="object-fill w-full h-full transition-opacity duration-300"
        src={
          isHovered && gifLoaded
            ? `/images/${directory_gif_name}`
            : `/images/${directory_image_name}`
        }
        alt={name}
      />

      <p
        className={`absolute left-1/2 transform -translate-x-1/2 text-white text-lg font-bold 
          transition-all duration-1000 ease-out ${
            isHovered ? "top-2" : "bottom-6"
          } drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]`}
      >
        {name}
      </p>

      {isHovered && (
        <div className="absolute bottom-0 inset-0 bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>
      )}

      <div
        className={`absolute bottom-4 left-4 right-4 text-white text-sm transition-opacity duration-1000 ease-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {description}

        <div className="w-full flex items-center justify-between mt-2">
          <div className="flex items-center gap-3 border-yellow-400 p-1 rounded-md">
            {genres?.map((genre) => {
              return (
                <span
                  key={genre?.genre_name}
                  className="text-md text-yellow-400"
                >
                  {genre?.genre_name}
                </span>
              );
            })}
          </div>

          <p className="text-white text-lg drop-shadow-md">
            {is_live ? "Live" : "Offline"}
          </p>
        </div>
      </div>
    </div>
  );
};
