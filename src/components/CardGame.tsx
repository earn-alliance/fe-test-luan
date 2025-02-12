import { useEffect, useState } from "react";
import { Game } from "../types/games-response";

export const CardGame = ({
  id,
  name,
  directory_image_name,
  directory_gif_name,
  genres,
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

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      key={id}
      className="relative overflow-hidden w-[26.8125rem] h-[15.5625rem] flex 
      flex-col border-2 border-yellow-300 cursor-pointer transition-all 
      duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow 
      hover:outline hover:outline-2 hover:outline-yellow-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

      <div className="absolute bottom-0 inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

      <p
        className={`absolute left-1/2 transform -translate-x-1/2 text-white text-lg font-bold 
          transition-all duration-1000 ease-out ${
            isHovered ? "top-2" : "bottom-6"
          } drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]`}
      >
        {name}
      </p>

      <div
        className={`absolute bottom-4 left-4 right-4 text-white text-sm transition-opacity duration-1000 ease-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {description}

        <div className="flex space-x-2">
          {genres?.map((genre) => (
            <span
              key={genre?.genres?.genre_name}
              className="text-lg text-white"
            >
              {genre?.genres?.genre_name}
            </span>
          ))}

          <p className="text-white text-lg">{is_live ? "Live" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
};
