import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const saleProduct = createSlice({
    name: "saleProduct",
    initialState,
    reducers: {
        getInitialState: (state, action) =>{
            state.push(action.payload);
        }
    }
});

export default saleProduct.reducer;
export const { getInitialState } = saleProduct.actions;