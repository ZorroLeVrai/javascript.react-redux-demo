import { combineReducers } from "redux";
import uniqueCounterReducer from "./uniqueCounter";

export default combineReducers({
  myCounter: uniqueCounterReducer
});