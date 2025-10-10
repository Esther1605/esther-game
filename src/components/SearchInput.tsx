import "@fortawesome/fontawesome-free/css/all.min.css";

const SearchInput = () => {
  return (
    <div className="search-container">
      <i className="fas fa-search search-icon"></i>
      <input
        type="text"
        className="search-input"
        placeholder="Search games..."
      />
    </div>
  );
};

export default SearchInput;
