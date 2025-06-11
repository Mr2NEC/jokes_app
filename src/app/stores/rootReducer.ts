import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { jokesApi, jokesReducer } from '@/entities/jokes';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['jokes'],
};

const rootReducer = combineReducers({
  [jokesApi.reducerPath]: jokesApi.reducer,
  jokes: jokesReducer,
});

export const additionalMiddleware = [jokesApi.middleware];
export default persistReducer(rootPersistConfig, rootReducer);
