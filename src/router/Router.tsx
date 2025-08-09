import { createBrowserRouter } from "react-router-dom";
import { publicRoute } from "./public";
import { privateRoute } from "./private";

let routes: any = [];
routes = routes.concat(publicRoute, privateRoute);

export const router = createBrowserRouter(routes);
