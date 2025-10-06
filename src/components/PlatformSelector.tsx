import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data = [] } = usePlatforms();

  if (Error()) return null;

  return (
    <select className="platform-list">
      <option value="">Select Platform</option>
      {data.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
