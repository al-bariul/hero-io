import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Apps from "../components/Apps/Apps";
import Installation from "../components/Installation/Installation";
import App from "../App";
import AppsDetails from "../components/AppsDetails/AppsDetails";
import Error from "../components/Error/Error";

const fetchAppData = async () => {
  const response = await fetch("/data.json");
  return response.json();
};
const appPromise = fetchAppData();
// console.log(appPromise);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={<h1>Apps Coming...</h1>}>
            <Home appPromise={appPromise}></Home>
          </Suspense>
        ),
      },
      {
        path: "/apps",
        element: (
          <Suspense fallback={<h1>Book Coming...</h1>}>
            <Apps appPromise={appPromise}></Apps>
          </Suspense>
        ),
      },
      {
        path: "appdetails/:id",
        loader: () => fetch("/data.json").then((response) => response.json()),
        Component: AppsDetails,
      },
      {
        path: "/installation",
        element: (
          <Suspense fallback={<h1>Installation...</h1>}>
            <Installation appPromise={appPromise}></Installation>
          </Suspense>
        )
      },
    ],
  },
]);
