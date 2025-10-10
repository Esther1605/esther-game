import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}>
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          ref={ref}
          type="text"
          className="search-input"
          placeholder="Search games..."
        />
      </div>
    </form>
  );
};

export default SearchInput;
