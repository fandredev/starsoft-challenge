import { createSlice } from "@reduxjs/toolkit";
import Product from "../interfaces/Product";



interface CartState {
  cart: Product[]
}

const INITIAL_STATE: CartState = {
  cart: []
}

export type Actions = {
  type: string
  payload: Product
}


const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItem(state, action: Actions) {
      state.cart.push(action.payload)
    }
  }
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer

// 

export const getCart = (state: { cart: CartState }) => state.cart.cart
