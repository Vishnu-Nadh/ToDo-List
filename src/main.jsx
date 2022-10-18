import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeContextProvider } from "./context/theme-context";
import { ModelContextProvider } from "./context/model-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ModelContextProvider>
        <App />
      </ModelContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
