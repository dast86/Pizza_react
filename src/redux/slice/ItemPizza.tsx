import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dataPizzaType } from '../../component/1-App/dataPizza/dataPizza';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";


export type InitialState = {
    itemPizza: dataPizzaType[];
};

type fetchPizzasProps = {
    activeCategories: number;
    sortArr: string[];
    poputIdContent:number;
}

export const fetchPizzas = createAsyncThunk(
    'item-pizzas/fetchPizzas',
    async (params:fetchPizzasProps)=> {
        const {activeCategories,sortArr,poputIdContent} = params
        const res = await axios.get(
            activeCategories
              ? `https://66a7959a53c13f22a3d04f19.mockapi.io/iteams?sortBy=${sortArr[poputIdContent]}&order=desc&category=${activeCategories}`
              : ` https://66a7959a53c13f22a3d04f19.mockapi.io/iteams?sortBy=${sortArr[poputIdContent]}&order=desc`
          );
          return res.data
    }
) 


const initialState: InitialState = {
    itemPizza: [],
};

export const pizzasSlice = createSlice({
  name: 'item-pizzas',
  initialState,
  reducers: {
    statePizzas: (state, action)=>{
        state.itemPizza = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state,action:PayloadAction<dataPizzaType[]>) =>{
        state.itemPizza = action.payload
        console.log(state.itemPizza)
    })
  }
});

export const { statePizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;