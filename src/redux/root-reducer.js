import { combineReducers } from "redux";
import { userReducer } from "./reducer";

export const rootReducers = combineReducers({
    data: userReducer

})