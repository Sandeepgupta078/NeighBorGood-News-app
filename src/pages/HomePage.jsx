import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews, setCategory, setPage } from '../redux/newsSlice';
import { searchArticles, setSearchPage } from '../redux/searchSlice';
import ArticleList from '../components/ArticleCard';
import CategoryFilter from '../components/FilterCategory';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles: newsArticles, category, page: newsPage, status: newsStatus, error: newsError, totalPages: newsTotalPages } = useSelector((state) => state.news);
  const { articles: searchedArticles, query, page: searchPage, status: searchStatus, error: searchError, totalPages: searchTotalPages } = useSelector((state) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(searchArticles({ query, page: searchPage }));
    } else {
      dispatch(getNews({ category, page: newsPage }));
    }
  }, [dispatch, category, newsPage, query, searchPage]);

  const articles = query ? searchedArticles : newsArticles;
  const status = query ? searchStatus : newsStatus;
  const error = query ? searchError : newsError;
  const page = query ? searchPage : newsPage;
  const totalPages = query ? searchTotalPages : newsTotalPages;
  const setPageAction = query ? setSearchPage : setPage;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <SearchBar />
      </div>
      <CategoryFilter category={category} setCategory={(cat) => dispatch(setCategory(cat))} />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <ArticleList articles={articles} />}
      <Pagination page={page} setPage={(p) => dispatch(setPageAction(p))} totalPages={totalPages} />
    </div>
  );
};

export default HomePage;