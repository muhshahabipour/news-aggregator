import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const TrendingFirst = ({
  article = {
    title: "quis adipisicing dolore enim esse sunt",
    banner: "http://placehold.it/32x32",
    publishedAt: "2020-01-11T11:18:50 -02:00",
    description:
      "Ad exercitation elit id est cillum nostrud ea enim aute magna cupidatat pariatur ad. Quis exercitation ad aliqua pariatur elit ex reprehenderit. Irure ullamco amet aliquip velit do. Consectetur eu ut in consectetur in anim consectetur irure cillum reprehenderit in. Ea ipsum tempor cillum minim ut nulla tempor excepteur mollit laboris quis amet. Nisi ad quis fugiat fugiat fugiat.\r\n",
    content:
      "Ad exercitation elit id est cillum nostrud ea enim aute magna cupidatat pariatur ad. Quis exercitation ad aliqua pariatur elit ex reprehenderit. Irure ullamco amet aliquip velit do. Consectetur eu ut in consectetur in anim consectetur irure cillum reprehenderit in. Ea ipsum tempor cillum minim ut nulla tempor excepteur mollit laboris quis amet. Nisi ad quis fugiat fugiat fugiat.\r\n",
    author: "Darla Stark",
    url: "https://google.com",
  },
}) => {
  return (
    <Link
      to={`/article/${encodeURIComponent(article.title)}`}
      state={{ article }}
      className="flex items-stretch w-full"
    >
      <div className="w-full space-y-3">
        <div className="rounded-lg overflow-hidden xl:h-64 w-full bg-neutral-100 flex justify-center items-center">
          <img
            src={article.banner}
            alt=""
            className="min-w-0 min-h-0 flex-shrink-0 h-[inherit] w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 ">
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
                &nbsp; /&nbsp;
              </>
            )}
            {article.author || "unknown"}
            &nbsp; /&nbsp;
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

export default TrendingFirst;
