import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Apps from "../components/Apps/Apps";
import Installation from "../components/Installation/Installation";
import App from "../App";

const fetchAppData = async () => {
  const response = await fetch("/data.json");
  return response.json();
};
const appPromise = fetchAppData();
console.log(appPromise);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={<h1>Book Coming...</h1>}>
            <Home appPromise={appPromise}></Home>
          </Suspense>
        ),
      },
      {
        path: "/apps",
        element: (
          <Suspense fallback={<h1>Book Coming...</h1>}>
            <App appPromise={appPromise}></App>
          </Suspense>
        ),
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
