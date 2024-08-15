import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Pizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
};

export type InitialState = {
  item: Pizza[];
};

const initialState: InitialState = {
  item: [],
};

export const ItemSlice = createSlice({
  name: "item-pizza",
  initialState,
  reducers: {
    stateAddItem: (state, action: PayloadAction<Pizza>) => {
      const existingItem = state.item.find(
        (pizza) => pizza.id === action.payload.id
      );

      if (existingItem) {
        existingItem.count++;
      } else {
        state.item.push({ ...action.payload });
      }
    },
    stateRemoveCountPizza: (state, action: PayloadAction<number>) => {
      const existingItem = state.item.find(
        (pizza) => pizza.id === action.payload
      );
      if (existingItem && existingItem.count > 1) {
        existingItem.count--;
      }
    },
    stateDeletPizza: (state, action: PayloadAction<number>) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
    stateClear: (state)=>{
      state.item =[];
    }
  },
});

export const { stateAddItem, stateRemoveCountPizza, stateDeletPizza,stateClear} =
  ItemSlice.actions;

export default ItemSlice.reducer;
