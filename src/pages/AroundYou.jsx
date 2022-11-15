import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongCountryQuery } from "../redux/services/shazamCore";
const AroundYou = () => {
  const [country, setcountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongCountryQuery(country);
  useEffect(() => {
    console.log(process.env);
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey= ${
          import.meta.env.VITE_GEO_API_KEY
        }`
      )
      .then((res) => setcountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(!loading));
  }, [country]);
  if (isFetching && loading)
    return <Loader title="Loading songs around you..." />;
  if (error && country) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-white text-left mb-4">
        Around you <span className="text-[.9rem] text-red-600">{country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
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

export default AroundYou;
