import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import searchReducer from "./searchSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    search: searchReducer,
    favorites: favoritesReducer,
  },
});