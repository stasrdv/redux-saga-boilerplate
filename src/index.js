import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from "./sagas/saga";
import LogRocket from "logrocket";

LogRocket.init("pprkuq/redux-saga-example");

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, LogRocket.reduxMiddleware())
);

sagaMiddleware.run(watchAgeUp);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
