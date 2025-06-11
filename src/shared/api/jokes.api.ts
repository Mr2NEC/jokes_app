import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jokesBaseApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_JOKE_URL }),
  tagTypes: ['Jokes'],
  endpoints: () => ({}),
});
