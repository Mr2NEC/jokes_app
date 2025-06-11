import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IJoke, IJokesState } from './jokes.types';

const initialState: IJokesState = {
  jokes: [],
};

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    addJoke(state, action: PayloadAction<IJoke>) {
      const exists = state.jokes.some((joke) => joke.id === action.payload.id);
      if (!exists) {
        state.jokes.push(action.payload);
      }
    },
    deleteJoke(state, action: PayloadAction<IJoke['id']>) {
      state.jokes = state.jokes.filter((j) => j.id !== action.payload);
    },
  },
});

export const { addJoke, deleteJoke } = jokesSlice.actions;
export default jokesSlice.reducer;
