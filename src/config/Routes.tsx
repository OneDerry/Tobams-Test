

import { RouteObject } from "react-router-dom";
import ViewMore from "../Pages/ViewMore";
import Layout from "../layout/layout";
import Home from "../Pages/Home";

export default function appRouter(): RouteObject[] {
  return [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/view-more", element: <ViewMore /> },
      ],
    },
  ];
}
