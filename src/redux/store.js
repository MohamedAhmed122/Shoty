import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import RootReducer from "./RootReducer";

// here you can add many things in this array
const middleWare = [logger];


const store = createStore(RootReducer, applyMiddleware(...middleWare));

export default store;