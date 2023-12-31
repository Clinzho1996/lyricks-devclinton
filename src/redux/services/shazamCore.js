/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/track",
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `search/?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `songs/v2/get-details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `songs/list-recommendations?track_id=${songid}`,
    }),
    getSongsByGenre: builder.query({
      query: (genre) => `v1/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `artists/get-details?artist_id=${artistId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsBySearchQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;
