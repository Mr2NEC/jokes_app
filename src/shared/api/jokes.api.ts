import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_JOKE_URL =
  import.meta.env.VITE_BASE_JOKE_URL ?? 'https://official-joke-api.appspot.com/';

export const jokesBaseApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_JOKE_URL }),
  tagTypes: ['Jokes'],
  endpoints: () => ({}),
});
