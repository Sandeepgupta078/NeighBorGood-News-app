import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchArticles,
  setQuery,
  setSearchPage,
} from "../redux/searchSlice";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setQuery(input));
    dispatch(setSearchPage(1));
    dispatch(searchArticles({ query: input, page: 1 }));
  };

  return (
    <div className="mb-4 flex justify-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search news..."
        className="px-4 py-2 border rounded-l-md"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;