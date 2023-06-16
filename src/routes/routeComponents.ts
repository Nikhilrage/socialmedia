import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import { pathNames } from "./pathNames";
import Dashboard from "../components/Dashboard/Dashboard";

export const privateRouteComponents = [
  //{
  //  path: pathNames.LOGIN,
  //  component: Login,
  //},
  //{
  //  path: pathNames.REGISTER,
  //  component: Signup,
  //},
  {
    path: pathNames.DASHBOARD,
    component: Dashboard,
  },
];
