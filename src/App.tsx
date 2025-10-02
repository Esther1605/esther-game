import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <div className="grid-container">
      <header className="nav">
        <NavBar />
      </header>

      <aside className="aside">
        <GenreList />
      </aside>

      <main className="main">
        <GameGrid />
      </main>
    </div>
  );
}

export default App;
