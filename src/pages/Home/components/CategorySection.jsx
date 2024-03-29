import ArticleBrief from "../../../components/Feeds/ArticleBrief";
import PropTypes from "prop-types";
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
              <ArticleBrief loading={true} key={category.title + " " + index} />
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
