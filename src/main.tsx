import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Router from "./routing/Router";

import Modal from "react-modal";

Modal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer className="toast.container" autoClose={1000} />
    <RouterProvider router={Router} />
  </React.StrictMode>
);
