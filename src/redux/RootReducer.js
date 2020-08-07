import { combineReducers } from "redux";
import userReducer from './user/User-reducer'

const rootReducer = combineReducers({
    user: userReducer
});
export default rootReducer;
