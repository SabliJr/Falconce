import React from "react";
import "./Pagination.css";

const Index = ({ postPerPage, totalPages, paginate, currentPage }) => {
  const postNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
    postNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {postNumbers.map((number) => (
        <li key={number}>
          <a
            onClick={() => paginate(number)}
            href='!#'
            className={
              number === currentPage ? " active PaginateNum" : "PaginateNum"
            }>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Index;
