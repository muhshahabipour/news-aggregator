import ArticleBrief from "./ArticleBrief";
import PropTypes from "prop-types";

const CategorySection = ({ category }) => {
  return (
    <div className="w-full">
      <h5 className="font-semibold mb-6">{category.title}</h5>
      <div className="flex flex-col gap-4">
        {[...(category.articles || [])].slice(0, 2).map((article) => (
          <ArticleBrief key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

CategorySection.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        banner: PropTypes.string,
        publishAt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        summary: PropTypes.string,
        author: PropTypes.string,
        category: PropTypes.string,
        source: PropTypes.string,
      })
    ),
  }),
};

export default CategorySection;
