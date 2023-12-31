import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./config/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
