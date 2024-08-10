import { configureStore } from '@reduxjs/toolkit';
import filter from './slice/FilterSlice';
import search from './slice/SearchSlice';
import pizza from "./slice/ItemSlice"

export const store = configureStore({
  reducer: {
    filter,
    search,
    pizza
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;