import { combineReducers } from "redux";
import picalReducers from "./picalReducers";
import uiReducer from "./ui";

const allReducer = combineReducers({
  picalReducers,
  ui: uiReducer
});

export default allReducer;
