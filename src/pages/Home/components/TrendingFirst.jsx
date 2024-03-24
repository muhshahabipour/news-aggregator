import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TrendingFirst = ({ article }) => {
  return (
    <Link
      to={`/article/${article.source}/${article.id}`}
      className="flex items-stretch w-full"
    >
      <div className="w-full space-y-3">
        <div className="rounded-lg overflow-hidden h-64 w-full bg-neutral-100 flex justify-center items-center">
          <img
            src={article.banner}
            alt=""
            className="min-w-0 min-h-0 flex-shrink-0 w-full"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <i className="text-xs">
            <Link to={`/categories/${article.source}/${article.category}`} className="text-blue-500 hover:text-blue-700">
              {article.category}
            </Link>{" "}
            / {article.publishAt}
          </i>
          <h4 className="font-bold text-xl">{article.title}</h4>
          <p className="text-neutral-500 text-justify">{article.summary}</p>
        </div>
      </div>
    </Link>
  );
};

TrendingFirst.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    banner: PropTypes.string,
    publishAt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    summary: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    source: PropTypes.string,
  }),
};

export default TrendingFirst;
