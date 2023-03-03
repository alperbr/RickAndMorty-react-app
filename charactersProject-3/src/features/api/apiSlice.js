import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character',
  }),
  tagTypes: ['Character'],
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => '/',
    }),
  }),
})

export const { useGetCharactersQuery } = apiSlice
