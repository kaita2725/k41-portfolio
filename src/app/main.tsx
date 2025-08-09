import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

let rootElement = document.getElementById("app")!;
let root = createRoot(rootElement as HTMLElement);
if (process.env.REACT_APP_ENV === "production") {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.log("Service Worker registration failed:", error);
    });
}
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
