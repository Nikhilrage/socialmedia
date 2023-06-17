import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import { pathNames } from "./pathNames";
import Dashboard from "../components/Dashboard/Dashboard";
import ProfilePage from "../components/ProfilePage/ProfilePage";

export const privateRouteComponents = [
  {
    path: pathNames.DASHBOARD,
    component: Dashboard,
  },
  {
    path: pathNames.PROFILE_PAGE,
    component: ProfilePage,
  },
];
