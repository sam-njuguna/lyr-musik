import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, pause, play }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={pause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={play} />
  );

export default PlayPause;
