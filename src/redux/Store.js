import { configureStore } from "@reduxjs/toolkit";

import GigsReducer from "./Gigs";
import PlayersReducer from "./Players";
import InstsReducer from "./Insts";
import RefreshReducer from "./Refresh";

const store = configureStore({
  reducer: {
    gigs: GigsReducer,
    players: PlayersReducer,
    insts: InstsReducer,
    refresh: RefreshReducer,
  },
});

export default store;
