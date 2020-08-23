import {combineReducers} from "redux";
import wineReducer from "./wine/wineReducer"
import userReducer from "./user/userReducer"

// you can add extra reducers in this object
const rootReducer = combineReducers({
    wine: wineReducer,
    user: userReducer
})

export default rootReducer;