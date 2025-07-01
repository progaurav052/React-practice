import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
const appStore= configureStore({
    reducer:{ // combination of many small reducers from different slices
        cart:cartReducer
    }
});
export default appStore;