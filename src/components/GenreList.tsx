import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "./image-url";
import Spinner from "./Spinner";

const GenreList = () => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <div className="genre-list">
      {data.map((genre) => (
        <div key={genre.id} className="genre-item">
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            className="genre-image"
          />
          <p className="genre-name">{genre.name}</p>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
