import React from "react";
import { shallowEqual } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
//import AccessDeniedPage from '../pages/AccessDeniedPage/AccessDeniedPage'
//import LoginPage from '../pages/LoginPage/LoginPage'
//import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
//import RegisterPage from '../pages/RegisterPage/RegisterPage'
//import ResetPassword from '../pages/ResetPassword/ResetPassword'
//import TwoFaPage from '../pages/TwoFa/TwoFaPage'
import { getLocalItem } from "../utils/Storage";
import { pathNames } from "./pathNames";
import { privateRouteComponents } from "./routeComponents";
import _ from "lodash";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import AccessDeniedPage from "../components/AccessDeniedPage/AccessDeniedPage";

const RouteController = () => {
  const isLoggedIn = getLocalItem("userDetails")?.isLoggedIn;
  const userData = useAppSelector(
    (state: any) => state.auth.data,
    shallowEqual
  );
  console.log("isLoggedIn: ", isLoggedIn);
  return (
    <Routes>
      {privateRouteComponents.map((route: any) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <PrivateRoute
              component={route.component}
              authenticated={isLoggedIn}
              userData={userData}
            />
          }
        />
      ))}
      <Route
        path={pathNames.LOGIN}
        element={
          <PublicRoute
            component={Login}
            authenticated={isLoggedIn}
            userData={userData}
          />
        }
      />
      <Route
        path={pathNames.REGISTER}
        element={
          <PublicRoute
            component={Signup}
            authenticated={isLoggedIn}
            userData={userData}
          />
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

//* PRIVATE ComponentType

type Props = {
  component: React.ComponentType;
  path?: string;
  authenticated: boolean;
  userData: any;
};

const PrivateRoute = ({
  component: RouteComponent,
  authenticated,
  userData,
}: Props) => {
  const isAuthenticated = authenticated;

  if (isAuthenticated && userData) {
    return <RouteComponent />;
  }

  if (isAuthenticated) {
    return <AccessDeniedPage />;
    //return <Login />;
  }

  return <Navigate to={pathNames.LOGIN} />;
};

//* PRIVATE ComponentType

type PublicRouteProps = {
  component: React.ComponentType;
  path?: string;
  roles: string[];
  authenticated: boolean;
  userData: any;
};

const PublicRoute = ({
  component: RouteComponent,
  authenticated,
  userData,
}: Props) => {
  const isAuthenticated = authenticated;

  if (!isAuthenticated && !userData) {
    console.log("isAuthenticated if condition");
    return <RouteComponent />;
  }

  return <Navigate to={pathNames.DASHBOARD} />;
};

export default RouteController;
