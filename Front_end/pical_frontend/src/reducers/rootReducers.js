import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import picalReducers from "./picalReducers";
import uiReducer from "./ui";
import accountReducers from "./accountReducers";
import InformationAccountReducer from "./InformationAccountReducer";

const allReducer = combineReducers({
  picalReducers,
  ui: uiReducer,
  accountReducers,
  form: formReducer,
  InformationAccountReducer
});

export default allReducer;
