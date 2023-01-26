import React from "react";

const Pagination = ({ page, setPage, nextPage, previousPage }) => {
  return (
    <div>
      <ul className="flex justify-center">
        <button className="w-44" onClick={() => previousPage()}>
          Previous
        </button>
        <h2 className="m-5">{page}</h2>
        <button className="w-44" onClick={() => nextPage()}>
          Next
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
