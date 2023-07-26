import React from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const imageUrl = artistId
    ? artistData?.attributes?.artwork?.url
        ?.replace("{w}", "500")
        ?.replace("{h}", "500")
    : songData?.images?.coverart;

  const artistName = artistId
    ? artistData?.attributes?.name || "Unknown Artist"
    : songData?.title || "Unknown Song";

  const artistGenre = artistId
    ? artistData?.attributes?.genreNames?.[0] || "Unknown Genre"
    : songData?.genres?.primary || "Unknown Genre";

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

      <div className="absolute inset-0 flex items-center">
        <img
          alt="profile"
          src={imageUrl}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistName}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists?.[0]?.adamid}`}>
              <p className="text-base text-gray-400 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className="text-base text-gray-400 mt-2">{artistGenre}</p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
