import { useLocation, useNavigate } from "react-router-dom";

import AdvanceSearch from "./components/AdvanceSearch";
import SearchResult from "./components/SearchResult";
import useNewsData from "@/hooks/useNewsApiData";

const Search = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const {
    loading,
    newsData: articles = [],
    totalResults,
  } = useNewsData(
    query.get("q"),
    {
      category: query.get("category"),
      from: query.get("from"),
      to: query.get("to"),
      sortBy: query.get("sortBy"),
    },
    query.get("page") || 1,
    10
  );

  const handleChangePage = (pageNumber) => {
    navigate(
      "/search" +
        (!search ? "?page=" + pageNumber : search + "&page=" + pageNumber)
    );
  };

  return (
    <div className="flex-grow flex flex-col xl:flex-row gap-8 px-6">
      <div className="xl:basis-1/4 flex-shrink-0">
        <AdvanceSearch />
      </div>

      <div className="xl:basis-3/4">
        <SearchResult
          loading={loading}
          articles={articles}
          totalPages={totalResults / 20}
          {...{ page: query.get("page") || 1, setPage: handleChangePage }}
        />
      </div>
    </div>
  );
};

export default Search;
