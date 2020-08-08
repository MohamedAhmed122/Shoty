import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CartReducer from "./Cart/Cart.Reducer";
import userReducer from "./user/User-reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
});
export default persistReducer(persistConfig, rootReducer);
