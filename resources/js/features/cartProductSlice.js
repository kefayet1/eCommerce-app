import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartProduct = createSlice({
    name: "cart product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const findProduct = state.find(
                (product) => product.id === action.payload.id
            );

            if (findProduct) {
                findProduct.totalProduct += 1;
                findProduct.totalPrice =
                    parseInt(findProduct.totalPrice) +
                    parseInt(action.payload.price);
            } else {
                state.push({
                    ...action.payload,
                    totalProduct: 1,
                    totalPrice: action.payload.price,
                });
            }
        },
        removeProduct: (state, action) => {
            return state.filter((product) => product.id !== action.payload);
        },
        decrementProduct: (state, action) => {
            return state
                .map((product) => {
                    if (product.id === action.payload) {
                        return {
                            ...product,
                            totalProduct: product.totalProduct - 1,
                            totalPrice: product.totalPrice - product.price,
                        };
                    }
                    return product;
                })
                .filter((product) => product.totalProduct > 0);
        },
    },
});

export default cartProduct.reducer;
export const { addProduct, removeProduct, decrementProduct } =
    cartProduct.actions;
