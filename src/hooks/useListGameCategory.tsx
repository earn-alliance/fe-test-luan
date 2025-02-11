import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { GameCategoryFetchResponse } from "../types/games-response";

const API_URL = process.env.REACT_APP_API_KEY as string;
const HASURA_API_KEY = process.env.REACT_APP_HASURA_KEY;

const fetcher = (): AxiosPromise<GameCategoryFetchResponse> => {
  return axios.post(
    API_URL,
    {
      query: `query GameCategoryQuery {
        game_genre_types {
          genre_name
        }
      }`,
    },
    {
      headers: {
        "x-hasura-admin-secret": HASURA_API_KEY,
        "Content-Type": "application/json",
      },
    },
  );
};

export const useListGameCategory = () => {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ["game-category"],
  });

  return { data: data?.data?.data?.game_genre_types };
};
