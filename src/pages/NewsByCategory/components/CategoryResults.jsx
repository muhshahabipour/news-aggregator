import ArticleBrief from "@/components/Feeds/ArticleBrief";
import CustomPagination from "@/components/Pagination/CustomPagination";
import { Fragment } from "react";
import PropTypes from "prop-types";

const CategoryResults = ({
  loading,
  articles = [],
  totalPages = 0,
  page = 1,
  setPage,
}) => {
  if (loading)
    return (
      <Fragment>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <ArticleBrief loading={true} key={"category " + index} />
        ))}
      </Fragment>
    );

  return (
    <>
      <div className="flex flex-col gap-4">
        {[...(articles || [])].map((article) => (
          <ArticleBrief key={article.id} article={article} />
        ))}
      </div>

      <CustomPagination
        currentPage={page || 1}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
};

CategoryResults.propTypes = {
  loading: PropTypes.bool,
  totalPages: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      banner: PropTypes.string,
      publishedAt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      description: PropTypes.string,
      content: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.string,
      }),
      source: PropTypes.string,
      url: PropTypes.string,
      keyWords: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default CategoryResults;
