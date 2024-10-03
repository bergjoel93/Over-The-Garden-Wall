import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorPage from "./Routes/ErrorPage";
import Start from "./Routes/Start";
import Root from "./Routes/Root";
import RSVP from "./Routes/RSVP";
import "./index.css";
import Trailer from "./Routes/Trailer";
import Location from "./Routes/Location";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Start />,
          },
          {
            path: "/rsvp",
            element: <RSVP />,
          },
          {
            path: "/trailer",
            element: <Trailer />,
          },
          {
            path: "/information",
            element: <Location />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
