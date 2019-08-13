import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import picalReducers from "./picalReducers";
import uiReducer from "./ui";
import accountReducers from "./accountReducers";

const allReducer = combineReducers({
  picalReducers,
  ui: uiReducer,
  accountReducers,
  form: formReducer
});

export default allReducer;
