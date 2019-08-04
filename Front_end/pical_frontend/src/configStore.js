import { createStore, compose, applyMiddleware } from "redux";
import { requestPosts } from "./actions";
import allReducer from "./reducers/rootReducers";

var redux = require("redux");
const axios = require("axios");

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__({ shouldHostReload: false })
    : compose;
const configStore = () => {
  const middlewares = [];
  const enhancers = [applyMiddleware(...middlewares)];
  // Create store
  const store = redux.createStore(allReducer, composeEnhancers(...enhancers));
  // store.dispatch(requestPosts());
  // // console.log(store.dispatch(requestPosts()));
  // console.log(store.getState());
  return store;
};

export default configStore();
