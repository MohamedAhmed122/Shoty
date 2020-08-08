import { createStore, applyMiddleware } from "redux";

import {persistStore} from 'redux-persist'

import logger from "redux-logger";

import RootReducer from "./RootReducer";

// here you can add many things in this array
const middleWare = [logger];


export const store = createStore(RootReducer, applyMiddleware(...middleWare));

export const persistor  = persistStore(store)