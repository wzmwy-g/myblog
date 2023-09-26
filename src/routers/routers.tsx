import { createBrowserRouter } from "react-router-dom";

import Home from "../views/home.tsx";
import Login from "../views/login.tsx";
import Error from "../views/error.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
