import { jokesBaseApi } from '@/shared/api';

import type { IJoke } from '../model/jokes.types';

export const jokesApi = jokesBaseApi.injectEndpoints({
  endpoints: (build) => ({
    getTenJokes: build.query<IJoke[], void>({
      query: () => 'jokes/ten',
      providesTags: ['Jokes'],
    }),
    getRandomJoke: build.query<IJoke, void>({
      query: () => 'jokes/random',
      providesTags: ['Jokes'],
    }),
  }),
});

export const { useGetTenJokesQuery, useGetRandomJokeQuery } = jokesApi;
