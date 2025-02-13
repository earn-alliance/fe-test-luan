import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { GamesFetchResponse } from "../types/games-response";

const API_URL = process.env.REACT_APP_API_KEY as string;
const HASURA_API_KEY = process.env.REACT_APP_HASURA_KEY;

if (!API_URL || !HASURA_API_KEY) {
  throw new Error("Missing API_URL or HASURA_API_KEY environment variables");
}

const fetcher = (): AxiosPromise<GamesFetchResponse> => {
  return axios.post(
    API_URL,
    {
      query: `query GameListQuery {
          games {
            name
            id
            directory_gif_name
            directory_image_name
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

export const useGameList = () => {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ["games"],
  });

  return { data: data?.data?.data?.games };
};
