import { configureStore } from "@reduxjs/toolkit";
import billReducer from "../features/billSlice";
import saleProduct from "../features/saleProduct";

const store = configureStore({
    reducer: {
        bills: billReducer,
        saleProducts: saleProduct,
    },
});

export default store;
