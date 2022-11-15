import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="hidden  md:flex items-center gap-4 md justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat
      size={20}
      color={repeat ? "red" : "white"}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
    {currentSongs?.length && (
      <MdSkipPrevious
        color="#FFF"
        className="cursor-pointer text-[1.6rem] md:text-[2.2rem] "
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer text-[2rem] md:text-[3rem]"
      />
    ) : (
      <BsFillPlayFill
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer text-[2rem] md:text-[3rem]"
      />
    )}
    {currentSongs?.length && (
      <MdSkipNext
        color="#FFF"
        className="cursor-pointer  text-[1.6rem] md:text-[2.2rem] "
        onClick={handleNextSong}
      />
    )}
    <BsShuffle
      size={20}
      color={shuffle ? "red" : "white"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
  </div>
);

export default Controls;
