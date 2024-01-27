import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = rootElement ? ReactDOM.createRoot(rootElement) : null;

root?.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
