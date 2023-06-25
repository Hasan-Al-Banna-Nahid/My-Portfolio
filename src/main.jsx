import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Layout/Home/Home";
import Experience from "./Components/Experience/Experience";
import AboutMe from "./Components/About/AboutMe";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Experience",
        element: <Experience />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
