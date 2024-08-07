import { configureStore } from '@reduxjs/toolkit';
import filter from './slice/FilterSlice';
import search from './slice/SearchSlice';

export const store = configureStore({
  reducer: {
    filter,
    search,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;