import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { QuizState } from "./Interface";

const initialState: QuizState = {
  categories: [],
  quizes: [],
  quiz: {},
  loading: false,
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

export const getAllQuizes = createAsyncThunk(
  "quiz/getAllQuizes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/quizzes");
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

export const getQuiz = createAsyncThunk(
  "quiz/getQuiz",
  async (quizId: string, thunkAPI) => {
    try {
      const response = await axios.get(`/api/quizzes/${quizId}`);
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
      })
      .addCase(
        getAllQuizes.fulfilled,
        (state, action: PayloadAction<QuizState>) => {
          state.quizes = action.payload.quizes;
        }
      )
      .addCase(getAllQuizes.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getQuiz.pending, (state) => {
        state.loading = !state.loading;
      })
      .addCase(getQuiz.fulfilled, (state, action: PayloadAction<QuizState>) => {
        state.loading = !state.loading;
        state.quiz = action.payload.quiz;
      });
  },
});

export default quizSlice.reducer;
