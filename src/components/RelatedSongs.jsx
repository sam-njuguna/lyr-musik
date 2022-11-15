import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  Pause,
  play,
  isPlaying,
  activeSong,
  artistId,
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-white">Related songs:</h2>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song, i) => (
          <SongBar
            key={`${artistId}-${song.key}-${i}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            pause={Pause}
            play={play}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
