import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import { thunkMiddleware } from "redux-thunk";
import App from "./App";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools/extension";

 const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);


// const store = createStore(
//   rootReducer,applyMiddleware(thunkMiddleware)
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
