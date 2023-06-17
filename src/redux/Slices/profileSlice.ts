import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface profileReducerInterface {
  openProfileEditModel: boolean;
  profileDetails: any;
}
const initialState: profileReducerInterface = {
  openProfileEditModel: false,
  profileDetails: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setOpenProfileEditModal: (state, action: PayloadAction<any>) => {
      state.openProfileEditModel = action.payload;
    },
    setProfileDetails: (state, action: PayloadAction<any>) => {
      state.profileDetails = action.payload;
    },
  },
});

export const { setOpenProfileEditModal, setProfileDetails } = profile.actions;

export default profile.reducer;
