import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const saleProduct = createSlice({
    name: "ShowMobileMenu",
    initialState,
    reducers: {
        hideMenu: (state, action) => {
            console.log("hello")
            return !state;
        },
    },
});

export default saleProduct.reducer;
export const { hideMenu } = saleProduct.actions;
