import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutReducerInterface {
  menuExpand: boolean;
}
const initialState: LayoutReducerInterface = {
  menuExpand: false,
};

const layout = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setMenuExpand: (state, action: PayloadAction<any>) => {
      state.menuExpand = action.payload;
    },
  },
});

export const { setMenuExpand } = layout.actions;

export default layout.reducer;
