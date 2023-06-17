import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dashboardReducerInterface {
  openPostModal: boolean;
}
const initialState: dashboardReducerInterface = {
  openPostModal: false,
};

const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setOpenPostModal: (state, action: PayloadAction<any>) => {
      state.openPostModal = action.payload;
    },
  },
});

export const { setOpenPostModal } = dashboard.actions;

export default dashboard.reducer;
