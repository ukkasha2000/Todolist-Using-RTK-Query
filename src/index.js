import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { apiSlice } from "./features/API/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
);

reportWebVitals();
