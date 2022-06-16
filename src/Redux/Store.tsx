import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./Reducers/quizSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
