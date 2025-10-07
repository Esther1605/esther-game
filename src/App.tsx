import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <div className="grid-container">
      <header className="nav">
        <NavBar />
      </header>

      <aside className="aside">
        <GenreList
          onSelectGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={null}
        />
      </aside>

      <main className="main">
        <PlatformSelector
          onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </main>
    </div>
  );
}

export default App;
