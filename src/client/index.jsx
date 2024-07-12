import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "../shared/App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

window.addEventListener("load", () => {
  ReactDOM.hydrateRoot(
    document.getElementById("react_root"),
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  );
});