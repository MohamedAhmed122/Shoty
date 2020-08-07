import { createStore, applyMiddleware } from "redux";

import RootReducer from "./RootReducer";

import logger from "redux-logger";

const middleWare = [logger];

const store = createStore(RootReducer, applyMiddleware(...middleWare));
