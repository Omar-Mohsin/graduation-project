import { configureStore , combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
const rootReducers = combineReducers({
    products : productsReducer,
})
export const store = configureStore({
    reducer  :rootReducers,
})