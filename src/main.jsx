import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import App from "./components/App";
import AdaptiveDesign from "./components/adaptiveDesign/AdaptiveDesign";
import { Provider } from "react-redux";
import store from "./store/store";
import "./css/style.css";
import "./css/game.css";
import "./css/parts/sponge.css";
import "./css/adaptive/adaptive.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}></Route>
      <Route path="/adaptive" element={<AdaptiveDesign />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
