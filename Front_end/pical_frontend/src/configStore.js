import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducer from "./reducers/rootReducers";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHostReload: false })
    : compose;

const configStore = () => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  // Create store
  const store = createStore(allReducer, composeEnhancers(...enhancers));
  return store;
};

export default configStore();
