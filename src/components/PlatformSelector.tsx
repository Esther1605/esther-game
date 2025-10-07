import type { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data = [], error } = usePlatforms();

  if (error) return null;

  return (
    <select
      className="platform-list"
      value={selectedPlatform?.id || ""}
      onChange={(e) => {
        const platform = data.find((p) => p.id === Number(e.target.value));
        if (platform) onSelectedPlatform(platform);
      }}>
      <option value="">Platforms</option>
      {data.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
