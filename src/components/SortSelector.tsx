interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <select
      className="platform-list"
      defaultValue=""
      onChange={(e) => onSelectSortOrder(e.target.value)}>
      <option value="" disabled hidden>
        Order by: {currentSortOrder?.label || "Relevance"}
      </option>

      {sortOrders.map((order) => (
        <option key={order.value} value={order.value}>
          {order.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelector;
