import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const article = action.payload;
      if (!state.articles.find((a) => a.url === article.url)) {
        state.articles.push(article);
        localStorage.setItem("favorites", JSON.stringify(state.articles));
      }
    },
    removeFavorite: (state, action) => {
      const article = action.payload;
      state.articles = state.articles.filter((a) => a.url !== article.url);
      localStorage.setItem("favorites", JSON.stringify(state.articles));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;