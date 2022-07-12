import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

// let rerenderEntireTree = (store) => {};
// rerenderEntireTree(store);
// store.subscribe(() => {
//   rerenderEntireTree(store);
// });
