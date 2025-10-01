import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div>
        <div className="game-image-container">
          <img src={game.background_image} className="game-image" />
        </div>
        <h3 className="game-title">{game.name}</h3>
      </div>
    </>
  );
};

export default GameCard;
