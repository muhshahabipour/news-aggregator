import Button from "@/components/Form/Button";
import PropTypes from "prop-types";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          disabled={Number(currentPage) === 1}
          onClick={() => handlePageClick(Number(currentPage) - 1)}
          className="border-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Button>

        <Button
          variant="outline"
          disabled={Number(currentPage) === Number(totalPages)}
          onClick={() => handlePageClick(Number(currentPage) + 1)}
          className="border-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

CustomPagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default CustomPagination;
