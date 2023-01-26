import React from "react";

const Pagination = ({ page, nextPage, previousPage }) => {
  return (
    <div>
      <ul className="flex justify-center">
        <button className="w-28 h-12" onClick={() => previousPage()}>
          Previous
        </button>
        <h3 className="m-3">{page}</h3>
        <button className="w-28 h-12" onClick={() => nextPage()}>
          Next
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
