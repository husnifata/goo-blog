import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d83f364d89b5916c7a27a1d807b64abd@o4509822639276032.ingest.us.sentry.io/4509822644453376",
  tracesSampleRate: 1.0,
  environment: "development",
  debug: true,
  release: "blog-personal@0.0.0,",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
