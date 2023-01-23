import { configureStore } from "@reduxjs/toolkit";

import InstsReducer from "./Insts";

const store = configureStore({ reducer: { insts: InstsReducer } });

export default store;
