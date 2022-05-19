import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import React from "react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
  
      <Provider store={store}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
  
  );
}

export default MyApp;
