import type { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (Platform: Platform) => void;
}
const PlatformSelector = ({ onSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <select className="platform-list">
      <option value="">Select Platform</option>
      {data.map((platform) => (
        <option
          onClick={() => onSelectedPlatform(platform)}
          key={platform.id}
          value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
