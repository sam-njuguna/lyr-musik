import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopChart: builder.query({ query: () => "/charts/world" }),
    getSongGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongDetail: builder.query({
      query: (songid) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: (songid) => `/tracks/related?track_id=${songid}`,
    }),
    getArtistDetail: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongCountry: builder.query({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongSearched: builder.query({
      query: (term) => `/search/multi?search_type=SONGS_ARTISTS&query=
      ${term}`,
    }),
  }),
});
export const {
  useGetTopChartQuery,
  useGetSongDetailQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailQuery,
  useGetSongCountryQuery,
  useGetSongGenreQuery,
  useGetSongSearchedQuery,
} = shazamCoreApi;
