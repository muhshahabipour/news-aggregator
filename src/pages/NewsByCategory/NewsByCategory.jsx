import { useLocation, useNavigate, useParams } from "react-router-dom";

import CategoryResults from "./components/CategoryResults";
import { capitalize } from "lodash";
import { groupParamsByKey } from "@/utils/helpers";
import qs from "qs";
import useNewsData from "@/hooks/useNewsApiData";

const NewsByCategory = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const { category = undefined, source = undefined } = useParams();

  const {
    loading,
    totalResults,
    newsData: articles = [],
  } = useNewsData(
    null,
    {
      category: category,
    },
    query.get("page") || 1,
    10,
    source
  );

  // useEffect(() => {
  //   if (!loading) console.log(loading, articles);
  // }, [articles, loading]);

  const handleChangePage = (pageNumber) => {
    const params = groupParamsByKey(query);
    navigate(
      "?" + qs.stringify({ ...params, page: pageNumber }, { skipNulls: true })
    );
  };

  return (
    <div className="flex-grow flex flex-col gap-8 px-6">
      <div className="flex flex-col gap-y-4 xl:flex-row">
        <div className="flex flex-col xl:basis-3/5 xl:pr-2 gap-y-4">
          <h1 className="font-bold text-2xl font-mono">
            Last from{" "}
            <span className="text-orange-400 capitalize">
              {capitalize(
                (category || source || "unknown").replaceAll("_", " ")
              )}
            </span>
          </h1>

          <CategoryResults
            loading={loading}
            articles={articles}
            totalPages={totalResults / 10}
            {...{ page: query.get("page") || 1, setPage: handleChangePage }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsByCategory;
