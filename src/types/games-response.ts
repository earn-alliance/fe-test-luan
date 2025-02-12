export interface Game {
  id: string;
  name: string;
  directory_gif_name?: string;
  directory_image_name?: string;
  genres?: GenreName[];
}

export interface GameType {
  genre_name: string;
}

type GenreName = {
  genres: {
    genre_name: string;
  };
};
export interface GenreTypeResponse {
  data: {
    games: Game[];
  };
}

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

export interface GameByNameFetchResponse {
  data: {
    games: Game[];
  };
}
