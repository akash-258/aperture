import { LucideIcon } from "lucide-react";

interface VideoOSDPlaybackButtonProps {
  handleClick: () => void;
  Icon: LucideIcon;
  disabled?: boolean;
}

export const VideoOSDPlaybackButton: React.FC<VideoOSDPlaybackButtonProps> = ({
  handleClick,
  Icon,
  disabled = false,
}) => {
  return (
    <button
      onClick={handleClick}
      className="text-white/70 hover:text-white transition-colors disabled:opacity-50"
      disabled={disabled}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};
