import { Game, GameType } from "./game";

export interface GamesFetchResponse {
  data: {
    games: Game[];
  };
}

export interface GameCategoryFetchResponse {
  data: {
    game_genre_types: GameType[];
  };
}
