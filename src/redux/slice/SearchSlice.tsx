import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type InitialState = {
    textInput: string;
};

const initialState: InitialState = {
    textInput: '',
};

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    stateInput: (state, action: PayloadAction<string>) => {
        state.textInput = action.payload;

    },
  },
});

export const { stateInput } = SearchSlice.actions;

export default SearchSlice.reducer;