import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SignIn = React.lazy(() => import("./features/Auth/pages/SignIn"));
const SignUp = React.lazy(() => import("./features/Auth/pages/SignUp"));
const PageNotFound = React.lazy(() => import("./components/404NotFound"));
const Home = React.lazy(() => import("./features/Home"));

export const routes = [
  {
    path: "login",
    name: "SignIn",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    name: "SignUp",
    element: <SignUp />,
  },
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "*",
    name: "Home",
    element: <PageNotFound />,
  },
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={`AppRoutes_${route.path}`}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
