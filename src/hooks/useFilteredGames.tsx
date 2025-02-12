import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { GameByGenreResponse } from "../types/games-response";

const API_URL = process.env.REACT_APP_API_KEY as string;
const HASURA_API_KEY = process.env.REACT_APP_HASURA_KEY;

if (!API_URL || !HASURA_API_KEY) {
  throw new Error("Missing API_URL or HASURA_API_KEY environment variables");
}

const fetchGames = (
  genreName?: string,
  name?: string,
  isLive?: boolean,
): AxiosPromise<GameByGenreResponse> => {
  return axios.post(
    API_URL,
    {
      query: `
        query GameByGenreQuery($genre_name: game_genre_types_enum, $name: String, $is_live: Boolean) {
          games(where: {
            ${isLive !== undefined ? "is_live: { _eq: $is_live }," : ""}
            ${genreName ? "genres: { genre_name: { _eq: $genre_name } }," : ""}
            ${name ? "name: { _iregex: $name }" : ""}
          }) {
            id
            name
            is_live
            directory_gif_name
            directory_image_name
            genres {
              genre_name
            }
          }
        }
      `,
      variables: {
        ...(genreName && { genre_name: genreName }),
        ...(name && { name }),
        ...(isLive !== undefined && { is_live: isLive }),
      },
    },
    {
      headers: {
        "x-hasura-admin-secret": HASURA_API_KEY,
        "Content-Type": "application/json",
      },
    },
  );
};

export const useFilteredGames = (
  genreName?: string,
  name?: string,
  isLive?: boolean,
) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["games", genreName, name, isLive],
    queryFn: () => fetchGames(genreName, name, isLive),
    enabled: Boolean(API_URL),
  });

  return {
    games: data?.data?.data?.games ?? [],
    isLoading,
    isError,
  };
};
