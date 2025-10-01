import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <div className="grid-container">
      <div className="grid-layout">
        <section className="nav">
          <NavBar />
        </section>
        <section className="aside">
          <GenreList />
        </section>

        <section className="main">
          <GameGrid />
        </section>
      </div>
    </div>
  );
}

export default App;
