import { configureStore , combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import cartReducer from './cart/cartSlice';
const rootReducers = combineReducers({
    products : productsReducer,
    cart : cartReducer,
})
export const store = configureStore({
    reducer  :rootReducers,
})