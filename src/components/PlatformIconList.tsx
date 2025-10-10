import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone, MdPhone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "../hooks/usePlatforms";
import { type IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    phone: MdPhone,
  };

  return (
    <div className="platform-icons">
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon ? <Icon key={platform.id} /> : null;
      })}
    </div>
  );
};

export default PlatformIconList;
