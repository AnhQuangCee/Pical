import { combineReducers } from "redux";
import picalReducers from "./picalReducers";
import uiReducer from "./ui";
import accountReducers from "./accountReducers";

const allReducer = combineReducers({
  picalReducers,
  ui: uiReducer,
  accountReducers
});

export default allReducer;
