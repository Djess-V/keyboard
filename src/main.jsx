import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./css/style.css";
import "./css/sponge.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
