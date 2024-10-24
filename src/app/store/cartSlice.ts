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
    addProduct(state, action: Actions) {
      const itemExists = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (!itemExists)
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
    },

    incrementQuantityItem(state, action: Actions) {
      const itemExists = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (itemExists && itemExists?.quantity) {
        itemExists.quantity += 1;
      }

      if (itemExists?.totalPrice) {
        itemExists.totalPrice += itemExists.price;
      }
    },
  },
});

export const { addProduct, incrementQuantityItem } = cartSlice.actions;
export default cartSlice.reducer;

//

export const getCart = ({ cart }: RootState) => cart.cart;
export const selectCartCount = ({ cart }: RootState) => cart.cart.length;

export const getTotalCartQuantity = ({ cart }: RootState) =>
  cart.cart.reduce((acc, item) => acc + (item?.quantity ?? 0), 0);

export const getTotalCartPrice = (state: { cart: CartState }) =>
  state.cart.cart.reduce((acc, item) => acc + (item.totalPrice ?? 0), 0);

export const getCurrentQuantityById =
  (id: number) =>
  ({ cart }: RootState) =>
    cart.cart.find((product) => product.id === id)?.quantity || 0;
