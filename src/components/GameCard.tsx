import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="game-card">
      <div className="game-image-container">
        <img
          src={game.background_image}
          alt={game.name}
          className="game-image"
        />
      </div>
      <div className="game-card-body">
        <h3 className="game-title">{game.name}</h3>
        {game.parent_platforms && (
          <div className="platforms">
            {game.parent_platforms.map(({ platform }) => (
              <p>{platform.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
