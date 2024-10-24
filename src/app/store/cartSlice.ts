import { createSlice } from '@reduxjs/toolkit';
import Product from '../interfaces/Product';

import type { RootState } from '../store';

interface CartState {
  cart: Product[];
}

const INITIAL_STATE: CartState = {
  cart: [],
};

export type Actions = {
  type: string;
  payload: Product;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItem(state, action: Actions) {
      const itemExists = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (!itemExists) state.cart.push({ ...action.payload, quantity: 1 });
    },

    incrementQuantityItem(state, action: Actions) {
      const itemExists = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (itemExists && itemExists.quantity) itemExists.quantity++;
    },
  },
});

export const { addItem, incrementQuantityItem } = cartSlice.actions;
export default cartSlice.reducer;

//

export const getCart = ({ cart }: RootState) => cart.cart;
export const selectCartCount = ({ cart }: RootState) => cart.cart.length;

export const getCurrentQuantityById =
  (id: number) =>
  ({ cart }: RootState) =>
    cart.cart.find((product) => product.id === id)?.quantity || 0;
