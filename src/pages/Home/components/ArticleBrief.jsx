import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ArticleBrief = ({ article }) => {
  return (
    <Link to={`/article/${article.source}/${article.id}`} className="flex items-stretch w-full gap-2">
      <div className="rounded-lg flex-shrink-0 overflow-hidden h-32 w-32 bg-neutral-100 flex justify-center items-center">
        <img
          src={article.banner}
          alt=""
          className="min-w-0 min-h-0 flex-shrink-0 w-full"
        />
      </div>

      <div className="flex flex-col gap-1 pt-1">
        <i className="text-xs">
          {article.publishAt}
        </i>
        <h4 className="font-bold line-clamp-2">{article.title}</h4>
        <p className="line-clamp-4 text-neutral-500 text-xs text-justify">
          {article.summary}
        </p>
      </div>
    </Link>
  );
};

ArticleBrief.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    banner: PropTypes.string,
    publishAt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    summary: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    source: PropTypes.string,
    url: PropTypes.string,
    keyWords: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ArticleBrief;
