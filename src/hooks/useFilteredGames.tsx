import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { GameByGenreResponse } from "../types/games-response";

const API_URL = process.env.REACT_APP_API_KEY as string;
const HASURA_API_KEY = process.env.REACT_APP_HASURA_KEY;

const fetcher = (
  genreName: string,
  searchTerm: string,
  isLive: boolean,
): AxiosPromise<GameByGenreResponse> => {
  return axios.post(
    API_URL,
    {
      query: `query GameByGenreQuery($genre_name: game_genre_types_enum! $searchTerm: String! $is_live: Boolean!) {
        games(where: {is_live: {_eq: $is_live}, genres: {genre_name: {_eq: $genre_name}}, name: {_iregex: $searchTerm}}) {
          name
          id
          is_live
          directory_gif_name
          directory_image_name
          genres {
            genre_name
          }
        }
      }`,
      variables: {
        genre_name: genreName,
        searchTerm: searchTerm,
        is_live: isLive,
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
  genre_name: string,
  searchTerm: string,
  is_live: boolean,
) => {
  const { data } = useQuery({
    queryFn: () => fetcher(genre_name, searchTerm, is_live),
    queryKey: ["game-by-genre", genre_name, searchTerm],
  });

  console.log({ data: data?.data.data });

  return { data: data?.data.data?.games };
};
