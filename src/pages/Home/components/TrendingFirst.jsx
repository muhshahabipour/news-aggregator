import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const TrendingFirst = ({ article }) => {
  return (
    <Link
      to={`/article/${encodeURIComponent(article.title)}`}
      state={{article}}
      className="flex items-stretch w-full"
    >
      <div className="w-full space-y-3">
        <div className="rounded-lg overflow-hidden h-64 w-full bg-neutral-100 flex justify-center items-center">
          <img
            src={article.banner}
            alt=""
            className="min-w-0 min-h-0 flex-shrink-0 h-[inherit] w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <i className="text-xs">
            {!article.category ? (
              ""
            ) : (
              <>
                <Link
                  to={`/categories/${article.category}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {article.category}
                </Link>
                &nbsp; /&nbsp;
              </>
            )}
            {dayjs().to(dayjs(article.publishedAt))}
          </i>
          <h4 className="font-bold text-xl">{article.title}</h4>
          <p className="text-neutral-500 text-justify">{article.description}</p>
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
    publishedAt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    description: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    source: PropTypes.string,
    url: PropTypes.string,
    keyWords: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default TrendingFirst;
