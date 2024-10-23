import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./store/cartSlice";

const store = configureStore({
  reducer: {
    cart: cardReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store