import { TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART } from "./Cart.Types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});
