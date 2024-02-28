import React from "react";

const Pagination = ({ numberOfPages, setCurrentPage }) => {
  const handlePageChange = (e) => {
    console.log(e.target.value);
    setCurrentPage(e.target.value);
  };

  return (
    <>
      <select onChange={handlePageChange}>
        {[...Array(numberOfPages).keys()].map((pageNumber) => (
          <option key={pageNumber} value={pageNumber + 1}>
            {pageNumber + 1}
          </option>
        ))}
      </select>
    </>
  );
};

export default Pagination;
