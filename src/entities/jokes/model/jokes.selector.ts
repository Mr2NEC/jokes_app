import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/app/stores';

export const selectJokesState = (state: RootState) => state.jokes;

export const selectAddedJokes = createSelector(selectJokesState, (jokesState) => jokesState.jokes);
