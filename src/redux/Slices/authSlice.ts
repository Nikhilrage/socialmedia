import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthReducerInterface {
  loggedIn: boolean;
  data: any;
}
const initialState: AuthReducerInterface = {
  loggedIn: false,
  data: null,
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<any>) => {
      state.loggedIn = action.payload;
      state.data = action.payload;
    },
    logoutAction: () => {
      localStorage.removeItem("userDetails");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
  },
});

export const { loginAction, logoutAction } = auth.actions;

export default auth.reducer;
