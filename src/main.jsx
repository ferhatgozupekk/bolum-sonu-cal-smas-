import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./components/styled/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { SiteContextProvider } from "./context/SiteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteContextProvider>
      <App />
    </SiteContextProvider>
  </React.StrictMode>
);
