import React from "react";
import Article from "./Article";

const ArticleCard = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Article key={article.url} article={article} />
      ))}
    </div>
  );
};

export default ArticleCard;