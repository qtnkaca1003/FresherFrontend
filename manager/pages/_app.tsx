import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import "../components/molecules/form/style.scss";
import Layout from "../components/Layout";
import { store } from "../redux/store";
import "../styles/globals.css";
import Template from "../components/template";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Template>
          <Component {...pageProps} />
        </Template>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
