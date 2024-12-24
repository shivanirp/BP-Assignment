import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

// Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
