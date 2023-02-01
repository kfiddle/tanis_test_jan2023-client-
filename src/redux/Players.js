import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPlayers: [],
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    refresh(state, action) {
      state.allPlayers = action.payload;
    },
  },
});

export const playersActions = playersSlice.actions;
export default playersSlice.reducer;
