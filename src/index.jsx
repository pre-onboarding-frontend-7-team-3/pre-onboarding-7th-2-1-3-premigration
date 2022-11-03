import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FilterProvider } from "./contexts/filterContext";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FilterProvider>
    <ThemeProvider theme={{ style: theme }}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </FilterProvider>,
);
