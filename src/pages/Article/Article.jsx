import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const article = {
  id: "d8f079e8-7c82-4b64-b1ba-69a8e08123a8",
  banner: "http://placehold.it/64x32",
  publishAt: "2015-10-21T11:34:26 -03:00",
  title: "quis velit nostrud irure laborum aliqua",
  summary:
    "Duis anim nostrud eiusmod proident et. Ex in nostrud magna excepteur eiusmod magna aliquip consequat laboris excepteur. Cupidatat velit fugiat tempor incididunt amet elit exercitation non. Non enim minim enim amet tempor amet cillum magna velit cillum aute aliqua mollit veniam. Ut nisi elit excepteur cupidatat nostrud.\r\n",
  author: "Trujillo Oneill",
  category: "Sport",
};

const Article = () => {
  return (
    <div className="flex-grow flex flex-col gap-8 px-6">
      <div className="flex items-stretch w-full">
        <div className="w-full space-y-3">
          <div className="rounded-lg overflow-hidden h-64 w-full bg-neutral-100 flex justify-center items-center">
            <img
              src={article.banner}
              alt=""
              className="min-w-0 min-h-0 flex-shrink-0 w-full"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <div className="flex justify-between">
              <i className="text-xs">{article.publishAt}</i>

              <Link
                to={`/categories/${article.category}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {article.category}
              </Link>
            </div>

            <h1 className="font-bold text-2xl">{article.title}</h1>
            <p className="text-neutral-500 text-justify">{article.summary}</p>

            <Link
              to={article.url || "https://google.com"}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-blue-500 hover:text-blue-700 text-sm my-4"
            >
              <i>{article.url || "https://google.com"}</i>
            </Link>

            <hr />

            <div className="text-sm mt-4">
              <span className="font-semibold">Summary</span>
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

export default Article;
