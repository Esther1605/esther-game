import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./image-url";
import Spinner from "./Spinner";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="genre-list">
      {data.map((genre) => (
        <div key={genre.id} className="genre-item">
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            className="genre-image"
          />
          <button
            font-weight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            onClick={() => onSelectGenre(genre)}
            className="genre-name"
            type="button">
            {genre.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
