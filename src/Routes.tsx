import { useRoutes } from "react-router-dom";

// pages

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export function AppRoutes() {
  return useRoutes([
    { path: "/", element: <Home /> },

    { path: "*", element: <NotFound /> },
  ]);
}
