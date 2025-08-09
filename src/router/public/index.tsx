import { Navigate } from "react-router-dom";
import Loadable from "../../components/common/Loadable";
import { lazy } from "react";

//public
const HomePage = Loadable(lazy(() => import("../../pages/public/Home")));
const NotFoundPage = Loadable(
  lazy(() => import("../../pages/public/NotFound"))
);

export const publicRoute = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    children: [],
  },
  {
    path: "home",
    element: HomePage,
  },
  {
    path: "not-found",
    element: NotFoundPage,
  },

  {
    path: "*",
    element: <Navigate to="/not-found" />,
  },
];
