import React, { Suspense } from "react";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}></Route>
      <Route path="/adaptive" element={<AdaptiveDesign />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense className="suspense" fallback={<h1>Loading profile...</h1>}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
