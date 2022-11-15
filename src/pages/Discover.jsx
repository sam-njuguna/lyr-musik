import { useDispatch, useSelector } from "react-redux";
import { Loader, Error, SongCard } from "../components";
import { genres } from "../assets/constants";

import { useGetSongGenreQuery } from "../redux/services/shazamCore";
import { selectGenreListId } from "../redux/features/playerSlice";
const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongGenreQuery(
    genreListId || "POP"
  );
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;
  if (isFetching) return <Loader title="Loading song..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">
          Discover{" "}
          <span
            className=" text-red-600 text-xl ml-2
          font-bold"
          >
            {genreTitle}{" "}
          </span>
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || "pop"}
          className="bg-black text-gray-300 p-3 text-sm  h-10  outline-none sm:mt-0 mt-5 border-blue-300"
        >
          {genres.map((gen) => (
            <option
              key={gen.value}
              value={gen.value}
              className="h-10 overflow-y-scroll"
            >
              {gen.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
