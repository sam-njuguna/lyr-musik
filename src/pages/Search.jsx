import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Error, Loader, SongCard } from "../components";
import { useGetSongSearchedQuery } from "../redux/services/shazamCore";
const Search = () => {
  const { term } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongSearchedQuery(term);
  if (isFetching) return <Loader title="Loading top charts..." />;
  if (error) return <Error />;

  const songs = data?.tracks?.hits.map((song) => song.track);
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-white text-left  mb-4">
        Searched results{" "}
        <span className="font-black text-red-600 text-xl ml-2">{term}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
