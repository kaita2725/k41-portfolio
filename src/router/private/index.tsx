import { Navigate } from "react-router-dom";
import Loadable from "../../components/common/Loadable";
import { lazy } from "react";

const NotFoundPage = Loadable(
  lazy(() => import("../../pages/public/NotFound"))
);

export const privateRoute = [
  {
    // path: "/",
    // element: <ProtectedRoute />,
  },
];
