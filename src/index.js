import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducers from "./redux/reducers";

import App from "./App";
import "./baseStyle.css";
import "./style.css";
import * as serviceWorker from "./serviceWorker";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnchancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
