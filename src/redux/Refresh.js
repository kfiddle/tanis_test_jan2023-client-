import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refresh: true,
};

const refreshSlice = createSlice({
  name: "refresh",
  initialState,
  reducers: {
    toggle(state, action) {
      state.refresh = action.payload;
    },
  },
});

export const refreshActions = refreshSlice.actions;
export default refreshSlice.reducer;
