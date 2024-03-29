import { useEffect, useState } from "react";

const useNewsData = (
  searchTerm,
  params = { category: null, from: null, to: null, sortBy: null },
  page = 1,
  pageSize = 10,
  source
) => {
  // eslint-disable-next-line no-unused-vars
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function fetchNewsAPIData() {
      const apiKey = import.meta.env.VITE_NEWS_API_KEY;
      const apiUrl = `${import.meta.env.VITE_NEWS_API_BASE_URL + (!searchTerm ? `/v2/top-headlines?apiKey=${apiKey}&country=us` : `/v2/everything?apiKey=${apiKey}`)}`;
      const categoryParam = params.category
        ? `&category=${params.category}`
        : ""; // business, entertainment, general, health, science, sports, technology
      const searchParam = searchTerm
        ? `&q=${encodeURIComponent(searchTerm)}`
        : "";
      const fromParam = params.from ? `&from=${params.from}` : "";
      const toParam = params.to ? `&to=${params.to}` : "";
      const pageSizeParam = pageSize ? `&pageSize=${pageSize}` : "";
      const pageParam = page ? `&page=${page}` : "";
      const sortByParam = params.sortBy
        ? `&sortBy=${params.sortBy}`
        : "&sortBy=publishedAt"; // relevancy, popularity, publishedAt

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

      return {
        articles: data.articles.map((article) => ({
          ...article,
          banner: article.urlToImage,
          category: { title: article.category, value: article.category },
          author: article.author
            ? `By ${article.author}`
            : undefined || undefined,
          source: "NEWS_API",
        })),
        totalResults: data.totalResults,
      };
    }
    async function fetchNYTimesData() {
      const apiKey = import.meta.env.VITE_NY_TIMES_KEY;
      const apiUrl =
        import.meta.env.VITE_NEW_YORK_TIMES_BASE_URL +
        `/svc/search/v2/articlesearch.json?api-key=${apiKey}`;
      const categoryParam = params.category
        ? `&fq=news_desk:("${params.category}")`
        : "";
      const searchParam = searchTerm
        ? `&q=${encodeURIComponent(searchTerm)}`
        : "";
      const fromParam = params.from ? `&begin_date=${params.from}` : "";
      const toParam = params.to ? `&end_date=${params.to}` : "";
      // const pageSizeParam = pageSize ? `&pageSize=${pageSize}` : "";
      const pageParam = page ? `&page=${page}` : "";
      const sortByParam = params.sortBy
        ? `&sort=${params.sortBy === "publishedAt" ? "newest" : params.sortBy === "popularity" ? "relevancy" : "relevancy"}`
        : "&sort=newest"; // newest, oldest, relevance

      const url =
        apiUrl +
        categoryParam +
        searchParam +
        fromParam +
        toParam +
        // pageSizeParam +
        pageParam +
        sortByParam;
      const response = await fetch(url);
      const data = await response.json();

      if (data.response)
        return {
          articles: data.response.docs.map((article) => {
            const banner = article.multimedia.find(
              (x) => x.subType === "xlarge"
            );
            return {
              id: article._id,
              title: article.headline?.main,
              banner: banner
                ? "https://www.nytimes.com/" + banner?.url
                : undefined,
              publishedAt: article.pub_date,
              description: article.abstract,
              content: article.lead_paragraph,
              author: article.byline?.original || undefined,
              category: { title: article.news_desk, value: article.news_desk },
              url: article.web_url,
              keyWords: [...(article.keywords || [])].map(
                (keyword) => keyword.value
              ),
              source: "NY_TIMES",
            };
          }),
          totalResults: data.response.meta.hits,
        };
      else
        return {
          articles: [],
          totalResults: 0,
        };
    }
    async function fetchGuardianData() {
      const apiKey = import.meta.env.VITE_GUARDIAN_KEY;
      const apiUrl =
        import.meta.env.VITE_GUARDIAN_BASE_URL +
        `/search?api-key=${apiKey}&show-fields=thumbnail,byline,body,trailText,headline`;
      const categoryParam = params.category
        ? `&section=${params.category}`
        : "";
      const searchParam = searchTerm
        ? `&q=${encodeURIComponent(searchTerm)}`
        : "";
      const fromParam = params.from ? `&begin_date=${params.from}` : "";
      const toParam = params.to ? `&end_date=${params.to}` : "";
      // const pageSizeParam = pageSize ? `&pageSize=${pageSize}` : "";
      const pageParam = page ? `&page=${page}` : "";
      const sortByParam = params.sortBy
        ? `&sort=${params.sortBy}`
        : "&sort=newest"; // newest, oldest, relevance

      const url =
        apiUrl +
        categoryParam +
        searchParam +
        fromParam +
        toParam +
        // pageSizeParam +
        pageParam +
        sortByParam;
      const response = await fetch(url);
      const data = await response.json();

      return {
        articles: data.response.results.map((article) => ({
          id: article.id,
          title: article.fields.headline || article.webTitle,
          publishedAt: article.webPublicationDate,
          description: article.fields.trailText || undefined,
          content: article.fields.body || undefined,
          author: article.fields.byline
            ? `By ${article.fields.byline}`
            : undefined || undefined,
          category: { title: article.sectionName, value: article.sectionId },
          url: article.webUrl,
          banner: article.fields.thumbnail || undefined,
          source: "GUARDIAN",
        })),
        totalResults: data.response.total,
      };
    }

    const fns = [];

    if (!source || source === "NEWS_API")
      fns.push(setTimeout(() => fetchNewsAPIData(), 15000));
    if (!source || source === "NY_TIMES") fns.push(fetchNYTimesData());
    if (!source || source === "GUARDIAN") fns.push(fetchGuardianData());

    Promise.all(fns)
      .then((results) => {
        let articles = [];
        let totalElements = 0;

        results.forEach((result, index) => {
          // eslint-disable-next-line no-debugger
          // debugger
          articles = [...articles, ...(result.articles || [])];
          totalElements += Number(result.totalResults || 0);

          if (index === results.length - 1) {
            setNewsData(articles);
            setTotalResults(totalElements);
          }
        });
      })

      .catch((reason) => {
        console.error(reason);
        setError(reason);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [
    params.category,
    params.from,
    params.to,
    params.sortBy,
    searchTerm,
    page,
    pageSize,
    source,
  ]);

  return { newsData, totalResults, loading, error };
};

export default useNewsData;
