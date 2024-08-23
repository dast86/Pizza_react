
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import filter from './slice/FilterSlice';
import search from './slice/SearchSlice';
import pizza from "./slice/ItemSlice"
import itemPizzas from './slice/ItemPizza'


const rootReducer = combineReducers(
  {
    filter,
    search,
    pizza,
    itemPizzas
  },
)

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['search', 'itemPizzas'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persister = persistStore(store)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;