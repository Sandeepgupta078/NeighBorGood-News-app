import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const Article = ({ article }) => {
  return (
    <div
      key={article.url}
      className="flex flex-col bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between flex-1">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">
          <Link
            to={`/article/${encodeURIComponent(article.url)}`}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            {article.title}
          </Link>
        </h2>
        <p className="text-gray-700 flex-grow">{article.description}</p>
        <div className="mt-4">
          <FavoriteButton article={article} />
        </div>
      </div>
    </div>
  );
};

export default Article;