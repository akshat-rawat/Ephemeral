import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/messageReducer";

const rootReducer = combineReducers({
  messages: messageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
