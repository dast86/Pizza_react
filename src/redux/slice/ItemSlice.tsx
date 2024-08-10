import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Pizza = {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    count: number
}

export type InitialState = {
    item: Pizza[];
};  

const initialState: InitialState = {
    item: [],
};

export const ItemSlice = createSlice({
  name: 'item-pizza',
  initialState,
  reducers: {
    stateAddItem: (state, action:PayloadAction< Pizza>) => {
        const existingItem = state.item.find((pizza) => pizza.id === action.payload.id)

        if (existingItem) {
            existingItem.count++
        } else {
            state.item.push({...action.payload})
        }
    },
  },
});

export const { stateAddItem } = ItemSlice.actions;

export default ItemSlice.reducer;