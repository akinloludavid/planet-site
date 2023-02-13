import { lazy } from "react";
import { Navigate } from "react-router-dom";
import WithSuspense from "../components/WithSuspense";
import { IAppRoute } from "../types";
import { MERCURY, PLANET } from "./pathnames";

const HomePage = WithSuspense(lazy(() => import("../pages/HomePage")));

export const AppRoutes: IAppRoute[] = [
  { path: PLANET, element: <HomePage /> },
  { path: "*", element: <Navigate to={MERCURY} /> },
];
