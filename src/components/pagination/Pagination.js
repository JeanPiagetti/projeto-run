import React, { useState } from "react";


function Pagination({users,currentPage, setCurrentPage }) {
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pagesArray = Array.from(Array(users))

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const renderPageNumbers = pagesArray.map((number,index) => {
    if (index < maxPageNumberLimit + 1 && index > minPageNumberLimit) {
      return (
        <li
          key={index}
          id={index}
          onClick={handleClick}
          className={currentPage === index ? "pagination-item--active" : 'pagination-item'}
        >
          {index + 1}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pagesArray.length > maxPageNumberLimit) {
    pageIncrementBtn = <>
    <li onClick={handleNextbtn}> &hellip; </li>
     <li data-first-page className="pagination-item" onClick={() => {setCurrentPage(0)}}>
                  <span> « </span>
              </li>
     </>
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  return (
    <>
    <div className="pagination">
      <ul className="pagination-list">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pagesArray[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pagesArray[pagesArray.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button>
      </div>
    </>
  );
}

export default Pagination;