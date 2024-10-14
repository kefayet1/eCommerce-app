import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const billSlice = createSlice({
    name: "bill",
    initialState,
    reducers: {
        addCustomers: (state, action) => {
            state.length = 0;
            state.push({ ...action.payload, product: [] });
        },
        addProduct: (state, action) => {
            if (!state[0].product) {
                state[0].product = [];
                return;
            }
            const existProd = state[0].product.find(
                (item) => item.id === action.payload.id
            );

            if (existProd) {
                existProd.totalPrice += action.payload.totalPrice;
            } else {
                state[0].product.push(action.payload);
            }
        },
        removeProduct: (state, action) => {
            state[0].product = state[0].product.filter(
                (item) => item.id !== action.payload
            );
        },
        clearProduct: (state, action) => {
            state.length = 0;
        }
    },
});

export default billSlice.reducer;
export const { addCustomers, addProduct, removeProduct, clearProduct } = billSlice.actions;
