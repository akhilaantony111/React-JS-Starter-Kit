import {  combineReducers } from "redux";
import { login } from "./LoginReducer";

const AppReducer = combineReducers({
    login
})

const rootReducer = (state, action) => {
    return AppReducer(state, action)
}

export default rootReducer;