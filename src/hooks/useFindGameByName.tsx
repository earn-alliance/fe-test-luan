import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { GenreTypeResponse } from "../types/games-response";

const API_URL = process.env.REACT_APP_API_KEY as string;
const HASURA_API_KEY = process.env.REACT_APP_HASURA_KEY;

const fetcher = (regexValue: string): AxiosPromise<GenreTypeResponse> => {
  return axios.post(
    API_URL,
    {
      query: `query GameByName($regexValue: String!) {
        games(where: {name: {_regex: $regexValue}}) {
          name
          directory_gif_name
          directory_image_name
          genres(distinct_on: genre_name) {
            genre_name
          }
          id
        }
      }`,
      variables: {
        regexValue: regexValue,
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

export const useFindGameByName = (regexValue: string) => {
  const { data } = useQuery({
    queryFn: () => fetcher(regexValue),
    queryKey: ["game-by-name", regexValue],
  });

  return { data: data?.data.data?.games };
};
