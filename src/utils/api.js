import axios from "axios";

const API_KEY = "ffd396dae76a91150f77bd95be2608b8";
const BASE_URL = "https://gnews.io/api/v4";
// const BASE_URL = "https://newsapi.org/v2";
// const API_KEY = "53173701df75488fa2160fdc55cde185";

const fetchNews = async (category = "general", page = 1, pageSize = 20) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: "in",
      category,
      page,
      max: pageSize,
      apikey: API_KEY,
    },
  });
  return response.data;
};

const searchNews = async (query, page = 1, pageSize = 20) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      q: query,
      page,
      country: "in",
      apikey: API_KEY,
      max: pageSize,
    },
  });
  return response.data;
};

export { fetchNews, searchNews };