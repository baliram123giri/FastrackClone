import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk"
import logger from "redux-logger";
import { rootReducers } from "./root-reducer";
const middleware = [reduxThunk]
if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}
export const store = createStore(rootReducers, applyMiddleware(...middleware))