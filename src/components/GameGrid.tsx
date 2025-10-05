import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <div className="game-grid">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((data) => (
          <GameCard key={data.id} game={data} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
