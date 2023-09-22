import { lazy } from "react";

const Main = lazy(() => import("../pages/Main/Main"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Register = lazy(() => import("../pages/Register"));

const routes = [
  {
    path: "/",
    element: Main,
  },
  {
    path: "contact",
    element: Contact,
  },
  {
    path: "register",
    element: Register,
  },
];

export default routes;
