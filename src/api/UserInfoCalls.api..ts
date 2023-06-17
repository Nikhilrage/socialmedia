import { AxiosHelper } from "./AxiosHelper";
import { URL_PATHS } from "./Endpoint";

export const UserInfoCalls = {
  getUserID: () => {
    return AxiosHelper(URL_PATHS.user.getUserID, "GET").then((res: any) => {
      return res.data;
    });
  },
  getUserByID: (id: any) => {
    return AxiosHelper(URL_PATHS.user.getUserByID + `/${id}`, "GET").then(
      (res: any) => {
        return res.data;
      }
    );
  },
  updatedProfile: (id: any, payload: any) => {
    return AxiosHelper(
      URL_PATHS.user.updatedProfile + `/${id}`,
      "POST",
      payload
    ).then((res: any) => {
      return res.data;
    });
  },
  uploadProfileAvatar: (file: any, fileName: any, id: any) => {
    const formdata = new FormData();
    formdata.append("file", file, fileName);
    return AxiosHelper(
      URL_PATHS.user.uploadProfilePicture + `/${id}`,
      "POST",
      formdata
    ).then((response: any) => {
      console.log("file upload: ", response);
      return response?.data;
    });
  },
};
