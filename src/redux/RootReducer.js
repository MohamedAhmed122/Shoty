import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CartReducer from "./Cart/Cart.Reducer";
import userReducer from "./user/User-reducer";
import DirectoryReducer from "./directory/directory.reducer";
import shopReducer from "./Shop/Shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  shop: shopReducer,
});
export default persistReducer(persistConfig, rootReducer);
