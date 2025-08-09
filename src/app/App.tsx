import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "../styles/global";
import AppProviders from "./AppProvider";
import { router } from "../router/Router";

const App = () => (
  <AppProviders>
    <GlobalStyles />
    <RouterProvider router={router} />
  </AppProviders>
);

export default App;
