import { configureStore , combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import cartReducer from './cart/cartSlice';
import authReducer from './auth/authSlice'
const rootReducers = combineReducers({
    products : productsReducer,
    cart : cartReducer,
    auth :  authReducer, 

})
export const store = configureStore({
    reducer  :rootReducers,
})