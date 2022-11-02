import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={{ style: theme }}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
);
