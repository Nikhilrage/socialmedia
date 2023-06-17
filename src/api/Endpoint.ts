export const BASE_URL = "http://localhost:6001";

export const URL_PATHS = {
  authRoutes: {
    login: BASE_URL + "/users/login",
  },
  user: {
    register: BASE_URL + "/users/register",
    getUserID: BASE_URL + "/users/getUserID",
    getUserByID: BASE_URL + "/users/getUserByID",
    updatedProfile: BASE_URL + "/users/updateProfile",
    uploadProfilePicture: BASE_URL + "/users/upload",
  },
  post: { create: "https://localhost:6001/posts/create" },
};
