import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="grid-container">
      <header className="nav">
        <NavBar />
      </header>

      <aside className="aside">
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </aside>

      <main className="main">
        <GameGrid selectedGenre={selectedGenre} />
      </main>
    </div>
  );
}

export default App;
