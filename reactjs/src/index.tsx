import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom"
import { I18nextProvider } from "react-i18next"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "redux/store"
import App from "./App"
import "./assets/styles/index.scss"
import i18next from "./i18n"
import reportWebVitals from "./reportWebVitals"
import theme from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ChakraProvider resetCSS theme={theme}>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
