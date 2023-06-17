import axios from "axios";
//import { getLocalItem } from "../../utils/Storage";
import { BASE_URL } from "./Endpoint";
import { getLocalItem } from "../utils/Storage";

export const AxiosHelper = async (
  url: string,
  method: string,
  payload?: any
) => {
  axios.interceptors.request.use(
    (req: any) => {
      req.baseURL = BASE_URL;
      req.headers.Authorization =
        "Bearer " + getLocalItem("userDetails")?.token;
      return req;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
  const jwtToken = "Bearer " + getLocalItem("userDetails")?.token;
  const call = () => {
    switch (method) {
      case "GET":
        return axios.get(url);
      case "GET_IMAGE":
        return axios.get(url, { responseType: "blob" });
      case "POST":
        return axios.post(url, payload, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
      default:
        return axios.get(url);
    }
  };

  return await call();
};
