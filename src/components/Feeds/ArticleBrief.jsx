import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import capitalize from "lodash/capitalize";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ArticleBrief = ({ article }) => {
  return (
    <Link
      to={`/article/${encodeURIComponent(article.title)}`}
      state={{ article }}
      className="flex items-stretch flex-col md:flex-row w-full gap-2"
    >
      <div className="rounded-lg flex-shrink-0 overflow-hidden h-[inherit] md:h-32 w-full md:w-32 bg-neutral-100 flex justify-center items-center">
        <img
          src={article.banner}
          alt=""
          className="min-w-0 min-h-0 flex-shrink-0 h-[inherit] w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 pt-1 w-full">
        <div className="flex items-center justify-between gap-1">
          <i className="text-xs">
            {!article.category || !article.category.title ? (
              ""
            ) : (
              <>
                <Link
                  to={`/categories/${article.category.value}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {article.category.title}
                </Link>
                &nbsp; /&nbsp;&nbsp;
              </>
            )}
            {article.author || "unknown"}
            &nbsp; /&nbsp;&nbsp;
            {dayjs().to(dayjs(article.publishedAt))}
            &nbsp; /&nbsp;&nbsp;
            <Link
              to={`/sources/${article.source}`}
              className="text-orange-500 hover:text-orange-700 normal-case"
            >
              {capitalize(article.source.replaceAll("_", " "))}
            </Link>
          </i>
        </div>
        <h4 className="font-bold line-clamp-2">{article.title}</h4>
        <p className="line-clamp-4 text-neutral-500 text-justify">
          {article.description}
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
    publishedAt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    description: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    // category: PropTypes.string,
    category: PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
    }),
    source: PropTypes.string,
    url: PropTypes.string,
    keyWords: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ArticleBrief;
