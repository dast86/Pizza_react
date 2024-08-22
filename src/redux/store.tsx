import { configureStore } from '@reduxjs/toolkit';
import filter from './slice/FilterSlice';
import search from './slice/SearchSlice';
import pizza from "./slice/ItemSlice"
import itemPizzas from './slice/ItemPizza'

export const store = configureStore({
  reducer: {
    filter,
    search,
    pizza,
    itemPizzas
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;