import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useGames = (selectedGenre: Genre | null, selectedPlatform: unknown) => {
  const [data, setData] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const genreFilter = selectedGenre ? `?genres=${selectedGenre.id}` : "";

    apiClient
      .get<FetchGamesResponse>(`/games${genreFilter}`)
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [selectedGenre]);

  return { data, error, isLoading };
};

export default useGames;
