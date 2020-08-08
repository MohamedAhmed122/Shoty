import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from "./Cart.Types";
import { addItemToCart, removeItem } from "./Card.utils";

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
      case REMOVE_ITEM:
        return{
          ...state,
          cartItems:removeItem(state.cartItems, action.payload),
        }
    default:
      return state;
  }
};

export default cartReducer;
