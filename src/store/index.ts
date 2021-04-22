import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";
import appReducer from "../reducers";
import { State } from "./types";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const devtools =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  (() => (noop: any) => noop);
const logger =
  process.env.NODE_ENV === "development"
    ? require("redux-logger").createLogger({
        collapsed: true,
        duration: true,
        diff: true,
      })
    : () => (noop: any) => noop;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [applyMiddleware(logger, sagaMiddleware), devtools()];
  // @ts-ignore
  const rootReducer = (state: State, action: any) => appReducer(state, action);

  const store = createStore(
    // @ts-ignore
    rootReducer,
    {},
    compose(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
