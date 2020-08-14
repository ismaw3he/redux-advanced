import {combineReducers} from "redux";
import wineReducer from "./wine/wineReducer"

// you can add extra reducers in this object
const rootReducer = combineReducers({
    wine: wineReducer
})

export default rootReducer;