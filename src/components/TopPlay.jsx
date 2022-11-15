import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartQuery } from "../redux/services/shazamCore";

const TopChartCard = ({ song, i, isPlaying, activeSong, pause, play }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-0 p-4 rounded-lg cursor-pointer mb-2 ">
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-[.2rem]"
        src={song?.images?.coverart}
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link
          to={`/songs/${song.key}`}
          className="text-sm md:text-xl font-bold text-white hover:text-gray-400"
        >
          {song?.title}
        </Link>
        <Link
          to={`/artists/${song?.artists[0].adamid}`}
          className="text-base text-gray-300 mt-1 hover:underline"
        >
          {song?.subtitle}
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      pause={pause}
      play={play}
    />
  </div>
);
const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartQuery();
  const divRef = useRef(null);
  const topPlays = data?.slice(0, 4);
  const topArtist = data?.slice(0, 20);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });
  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white  font-bold text-center  text-xl">
            Top Charts
          </h2>
          <Link
            to="/top-charts"
            className="text-gray-300 hover:text-white text-base cursor-pointer hover:underline"
          >
            See more
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1  ">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              i={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              pause={handlePause}
              play={() => handlePlay(song, i)}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-xl">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 hover:text-white text-base cursor-pointer hover:underline">
              See more
            </p>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topArtist?.map((artist, i) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img
                  src={artist?.images?.background}
                  alt="name"
                  className="rounded-full w-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
