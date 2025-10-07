import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import type { Genre } from "./useGenres";
import type { Platform } from "./usePlatforms";

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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const [data, setData] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", {
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
        },
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [selectedGenre, selectedPlatform]);

  return { data, error, isLoading };
};

export default useGames;
