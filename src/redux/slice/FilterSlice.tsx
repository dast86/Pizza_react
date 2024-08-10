import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type  InitialState = {
  categoryId: number,
  poputId:number,

}

const initialState: InitialState = {
    categoryId: 0,
    poputId: 0, 

}

export const FilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    stateFilter: (state, action:PayloadAction<number>) => {
      state.categoryId = action.payload
    }, 
    statePoput: (state, action:PayloadAction<number>) =>{
      state.poputId=action.payload
    },
  },

})

export const { stateFilter,statePoput } = FilterSlice.actions

export default FilterSlice.reducer