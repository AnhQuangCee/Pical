import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import allReducer from "./reducers/rootReducers";
import rootSaga from "./sagas/rootSagas";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHostReload: false })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const configStore = () => {
  const middlewares = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  // Create store
  const store = createStore(allReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configStore();
