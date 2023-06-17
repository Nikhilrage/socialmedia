import { AxiosHelper } from "./AxiosHelper";
import { URL_PATHS } from "./Endpoint";

export const AuthCalls = {
  loginCall: (payload: any) => {
    return AxiosHelper(URL_PATHS.authRoutes.login, "POST", payload).then(
      (res: any) => {
        return res.data;
      }
    );
  },
  registerUser: (payload: any) => {
    return AxiosHelper(URL_PATHS.user.register, "POST", payload).then(
      (res: any) => {
        return res.data;
      }
    );
  },
};
