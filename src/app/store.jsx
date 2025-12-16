import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/product/productfetch";
import cartSlice from "../features/cart/cartSlice"



const store=configureStore({

    reducer:{
        products:productsReducer,
        cart: cartSlice
    }
})
export default store 