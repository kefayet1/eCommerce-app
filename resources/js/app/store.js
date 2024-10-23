import { configureStore } from "@reduxjs/toolkit";
import billReducer from "../features/billSlice";
import saleProduct from "../features/saleProduct";
import showMobileSlice from "../features/showMoblieSlice";

const store = configureStore({
    reducer: {
        bills: billReducer,
        saleProducts: saleProduct,
        mobileMenu: showMobileSlice
    },
});

export default store;
