import { combineReducers } from "redux";

import CartReducer from './Cart/Cart.Reducer'
import userReducer from './user/User-reducer'

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer
});
export default rootReducer;
