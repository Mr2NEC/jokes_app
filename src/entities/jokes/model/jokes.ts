import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IJoke } from './types';

export const jokesApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_JOKE_URL }),
  endpoints: (builder) => ({
    getRandomJoke: builder.query<IJoke, void>({
      query: () => `jokes/random`,
    }),
    getTenJokes: builder.query<IJoke[], void>({
      query: () => `jokes/ten`,
    }),
  }),
});

export const { useGetRandomJokeQuery, useGetTenJokesQuery } = jokesApi;
