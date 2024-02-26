import React from "react";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App tab="home" />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
