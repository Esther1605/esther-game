const SortSelector = () => {
  return (
    <select className="platform-list">
      <option value="" disabled selected hidden>
        Order by: Relevance
      </option>

      <option value="">Relevance</option>
      <option value="">Date added</option>
      <option value="">Name</option>
      <option value="">Release date</option>
      <option value="">Popularity</option>
      <option value="">Average rate</option>
    </select>
  );
};

export default SortSelector;
