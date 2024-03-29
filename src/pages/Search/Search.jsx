import { useLocation, useNavigate } from "react-router-dom";

import AdvanceSearch from "./components/AdvanceSearch";
import SearchResult from "./components/SearchResult";
import { groupParamsByKey } from "@/utils/helpers";
import qs from "qs";
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
    const params = groupParamsByKey(query);
    navigate(
      "/search?" +
        qs.stringify({ ...params, page: pageNumber }, { skipNulls: true })
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
          totalPages={totalResults / 10}
          {...{ page: query.get("page") || 1, setPage: handleChangePage }}
        />
      </div>
    </div>
  );
};

export default Search;
