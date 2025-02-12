import { useEffect, useState } from "react";
import { Game } from "../types/games-response";

export const CardGame = ({
  id,
  name,
  directory_image_name,
  directory_gif_name,
}: Game) => {
  const [isHovered, setIsHovered] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = `/images/${directory_gif_name}`;
    gifImage.onload = () => setGifLoaded(true);
  }, [directory_gif_name]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      key={id}
      className="w-[26.8125rem] h-[15.5625rem] flex flex-col border-2 border-yellow-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="object-fill w-full h-full"
        src={
          isHovered && gifLoaded
            ? `/images/${directory_gif_name}`
            : `/images/${directory_image_name}`
        }
        alt={name}
      />
    </div>
  );
};
