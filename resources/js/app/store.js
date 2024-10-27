import { configureStore } from "@reduxjs/toolkit";
import billReducer from "../features/billSlice";
import saleProduct from "../features/saleProduct";
import showMobileSlice from "../features/showMoblieSlice";
import cartProduct from "../features/cartProductSlice";

const store = configureStore({
    reducer: {
        bills: billReducer,
        saleProducts: saleProduct,
        mobileMenu: showMobileSlice,
        cartProduct: cartProduct,
    },
});

export default store;
