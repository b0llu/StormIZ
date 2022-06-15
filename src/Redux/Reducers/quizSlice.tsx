import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
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
      // return thunkAPI.rejectWithValue(error.response.data);
      console.log(error)
    }
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<QuizState>) => {
        state.categories = action.payload.categories;
      }
    );
  },
});

export default quizSlice.reducer;
