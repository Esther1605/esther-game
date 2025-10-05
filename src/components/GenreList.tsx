import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "./image-url";

const GenreList = () => {
  const { data } = useGenres();

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
