/* import theme from '@chakra-ui/theme'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: theme,
  },
} */

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux"
import { store } from "../redux/store"
export const decorators = [
  (Story) => (
    <Provider store={store}>
    <ChakraProvider>
      <Story />
    </ChakraProvider>
    </Provider>
  ),
];
