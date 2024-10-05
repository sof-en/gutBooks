import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import "./styles/index.css";
import "./i18n";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./config";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
