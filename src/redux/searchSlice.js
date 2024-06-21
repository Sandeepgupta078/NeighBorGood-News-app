import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchNews } from "../utils/api";

const pageSize = 20; 

export const searchArticles = createAsyncThunk(
  "search/searchArticles",
  async ({ query, page }) => {
    const response = await searchNews(query, page);
    return response;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
    query: "",
    page: 1,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSearchPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload.articles;
        state.totalPages = Math.ceil(action.payload.totalArticles / pageSize);
      })
      .addCase(searchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setQuery, setSearchPage } = searchSlice.actions;

export default searchSlice.reducer;