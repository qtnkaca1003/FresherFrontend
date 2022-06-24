import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./store/CartProvider";
import {  HashRouter } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  //<React.StrictMode>
  //Dùng HashRouter thay cho BrowerRouter
    <Provider store={store}>
      <ChakraProvider>
        <CartProvider>
          <HashRouter >
            <App />
          </HashRouter>
        </CartProvider>
      </ChakraProvider>
    </Provider>
  //</React.StrictMode>
);
reportWebVitals();
