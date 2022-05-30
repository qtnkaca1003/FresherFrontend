import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import "../components/molecules/forminput/style.scss";
import "../components/organisms/main/style.scss";
import Template from "../components/template";
import { store } from "../redux/store";
import "../styles/globals.css";
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
