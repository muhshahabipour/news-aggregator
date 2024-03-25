import { Link, useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const Article = () => {
  let { state } = useLocation();

  const { article } = state;

  return (
    <div className="flex-grow flex flex-col gap-8 px-6">
      <div className="flex items-stretch w-full">
        <div className="w-full space-y-3">
          <div className="rounded-lg overflow-hidden w-full bg-neutral-100 flex justify-center items-center">
            <img
              src={article.banner}
              alt=""
              className="min-w-0 min-h-0 flex-shrink-0 h-[inherit] w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <div className="flex justify-between">
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

              <Link
                to={`/categories/${article.category}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {article.category}
              </Link>
            </div>

            <h1 className="font-bold text-2xl">{article.title}</h1>
            <p className="text-neutral-500 text-justify">
              {article.description}
            </p>

            <Link
              to={article.url || "https://google.com"}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-blue-500 hover:text-blue-700 text-sm my-4 line-clamp-1"
            >
              <i>{article.url || "https://google.com"}</i>
            </Link>

            <hr />

            <div className="text-sm mt-4">
              <span className="font-semibold">description</span>
              <span className="text-orange-400">
                {" "}
                By {article.author || "unknown"}
              </span>
            </div>

            <p className="text-justify py-4">
              {article.content || "Oops!, This content is empty."}
            </p>

            {/* {article.keyWords && ( */}
            <div className="space-3 flex flex-wrap gap-4 mt-4 text-xs">
              {[...(article.keyWords || [])].map((word) => (
                <span
                  className="bg-neutral-200 rounded px-2 py-1 cursor-auto select-none"
                  key={word}
                >
                  #{word}
                </span>
              ))}
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
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

export default Article;
