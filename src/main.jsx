import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Routing
import { BrowserRouter } from "react-router-dom";

//Context
import AuthProvider from "./context/AuthContext";

//Base styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
