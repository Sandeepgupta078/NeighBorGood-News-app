import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { url } = useParams();
  const articleUrl = decodeURIComponent(url);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Article Detail</h1>
      <iframe src={articleUrl} title="Article Detail" className="w-full h-screen border" />
    </div>
  );
};

export default ArticlePage;