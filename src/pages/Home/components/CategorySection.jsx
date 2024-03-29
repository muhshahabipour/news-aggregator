import ArticleBrief from "../../../components/Feeds/ArticleBrief";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import useNewsData from "@/hooks/useNewsApiData";

const CategorySection = ({ category }) => {
  const { loading, newsData: articles = [] } = useNewsData(
    null,
    {
      category: category.key,
    },
    1,
    2
  );

  if (loading)
    return (
      <>
        <div className="w-full">
          <h5 className="font-semibold text-2xl font-mono mb-6">
            {category.title}
          </h5>
          <div className="flex flex-col gap-4">
            {[1, 2].map((index) => (
              <div
                key={category.title + " " + index}
                className="flex items-stretch flex-col md:flex-row w-full gap-2"
              >
                <div className="rounded-lg flex-shrink-0 overflow-hidden h-[inherit] md:h-32 w-full md:w-32 bg-neutral-100 flex justify-center items-center">
                  <Skeleton width={128} height={128} />
                </div>
                <div className="flex flex-col gap-1 pt-1 w-full">
                  <Skeleton width={180} />
                  <Skeleton count={1} />
                  <Skeleton count={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );

  if (articles.length === 0)
    return (
      <>
        <div className="w-full">
          <h5 className="font-semibold text-2xl font-mono mb-6">
            {category.title}
          </h5>
          <div className="flex flex-col gap-4">
            <div>No Data</div>
          </div>
        </div>
      </>
    );

  return (
    <div className="w-full">
      <h5 className="font-semibold text-2xl font-mono mb-6">
        {category.title}
      </h5>
      <div className="flex flex-col gap-4">
        {[...(articles || [])].slice(0, 2).map((article) => (
          <ArticleBrief key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

CategorySection.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    key: PropTypes.string.isRequired,
  }),
};

export default CategorySection;
