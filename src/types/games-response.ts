import { Game } from "./game";

export interface GamesFetchResponse {
  data: {
    games: Game[];
  };
}
