import { useEffect, useState } from "react";

const useNewsData = (
  searchTerm,
  params = { category: null, from: null, to: null, sortBy: null },
  page = 1,
  pageSize = 20
) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);

        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const apiUrl = `${import.meta.env.VITE_NEWS_API_BASE_URL + (!searchTerm ? `/v2/top-headlines?apiKey=${apiKey}&country=us` : `/v2/everything?apiKey=${apiKey}`)}`;
        const categoryParam = params.category
          ? `&category=${params.category}`
          : ""; // business, entertainment, general, health, science, sports, technology
        const searchParam = searchTerm
          ? `&q=${encodeURIComponent(searchTerm)}`
          : "";
        const fromParam = params.from ? `&from=${params.from}` : "";
        const toParam = page.to ? `&to=${params.to}` : "";
        const pageSizeParam = pageSize ? `&pageSize=${pageSize}` : "";
        const pageParam = page ? `&page=${page}` : "";
        const sortByParam = params.sortBy ? `&sortBy=${params.sortBy}` : ""; // relevancy, popularity, publishedAt

        const url =
          apiUrl +
          categoryParam +
          searchParam +
          fromParam +
          toParam +
          pageSizeParam +
          pageParam +
          sortByParam;
        const response = await fetch(url);
        const data = await response.json();

        setNewsData(
          data.articles.map((article) => ({
            ...article,
            banner: article.urlToImage,
          }))
        );
        setTotalResults(data.totalResults);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [
    params.category,
    params.from,
    params.to,
    params.sortBy,
    searchTerm,
    page,
    pageSize,
  ]);

  return { newsData, totalResults, loading, error };
};

export default useNewsData;
