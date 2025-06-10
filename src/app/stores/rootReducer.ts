import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { jokesApi } from '@/entities/jokes';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  [jokesApi.reducerPath]: jokesApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const additionalMiddleware = [jokesApi.middleware];
export default persistReducer(rootPersistConfig, rootReducer);
