import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { QuizState } from "./Interface";

const initialState: QuizState = {
  categories: [],
  quizes: [],
};

export const getCategories = createAsyncThunk(
  "quiz/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/categories");
      return response.data;
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error?.response &&
        error?.response?.data?.error
      ) {
        return thunkAPI.rejectWithValue(error.response.data.error);
      }
    }
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<QuizState>) => {
          state.categories = action.payload.categories;
        }
      )
      .addCase(getCategories.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default quizSlice.reducer;
