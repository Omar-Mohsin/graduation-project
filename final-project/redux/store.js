import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import { favReducer } from "./Fav/favSlice";
import authReducer from "./auth/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer,
  fav :  favReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
};  
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
