import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import picalReducers from "./picalReducers";
import uiReducer from "./ui";
import accountReducers from "./accountReducers";
import profileInfo from "./profileInfo";

const allReducer = combineReducers({
  picalReducers,
  ui: uiReducer,
  accountReducers,
  form: formReducer,
  profileInfo
});

export default allReducer;
