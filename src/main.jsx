import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Rings } from "react-loading-icons";
import ErrorPage from "./components/ErrorPage";
import App from "./components/App";
import "./css/style.css";
import "./css/game.css";
import "./css/sponge.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense className="suspense" fallback={<h1>Loading profile...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
