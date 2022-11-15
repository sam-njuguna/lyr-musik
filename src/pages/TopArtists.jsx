import { Error, Loader, ArtistCard } from "../components";
import { useGetTopChartQuery } from "../redux/services/shazamCore";
const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartQuery();
  if (isFetching) return <Loader title="Loading top charts..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-white text-left mb-4">
        Discover Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, i) => (
          <ArtistCard key={track.key} track={track} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
