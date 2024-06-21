import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneHeart } from "react-icons/ai";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

const FavoriteButton = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.articles);
  const isFavorite = favorites.some((fav) => fav.url === article.url);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }
  };

  return (
    <button
      onClick={handleFavorite}
      className={`px-4 py-2 rounded ${
        isFavorite ? "bg-red-500 text-white" : "bg-gray-200"
      }`}
    >
      {isFavorite ? <AiTwotoneHeart /> : <AiTwotoneHeart className="bg-red" />}
    </button>
  );
};

export default FavoriteButton;