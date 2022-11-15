import React from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artData = artistData?.artists[artistId]?.attributes;
  return (
    <div className="relative w-full flex flex-col mt-6">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-56 h-32" />
      <div className="absolute inset-0 flex items-center">
        <img
          alt="profile"
          src={
            artistId
              ? artData.artwork?.url.replace("{w}", "500").replace("{h}", "500")
              : songData?.images?.coverart
          }
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-2xl text-xl text-white">
            {artistId ? artData?.name : songData?.title}
          </p>
          {!artistData && (
            <Link
              to={`/artists/${songData?.artists[0]?.adamid}`}
              className="font-bold text-gray-200 hover:underline mt-2"
            >
              {songData?.subtitle}
            </Link>
          )}
          <p className=" text-[.9rem] text-gray-300">
            {artistId ? artData?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full sm:h-32 h-24" />
    </div>
  );
};

export default DetailsHeader;
