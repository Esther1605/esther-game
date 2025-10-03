import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../components/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="game-card">
      <div className="game-image-container">
        {game.background_image ? (
          <img
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
            className="game-image"
          />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>

      <div className="game-card-body">
        <h3 className="game-title">{game.name}</h3>

        <div className="logo-score">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
