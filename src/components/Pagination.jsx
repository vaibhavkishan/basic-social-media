import React from 'react';
import _ from 'lodash';

function Pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange, onPrevNext } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        <button
          className="page-link clickable card divBorder m-1"
          onClick={() => onPrevNext(-1)}
          disabled={currentPage === 1 ? true : false}
        >
          {'<'}
        </button>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a
              className="page-link clickable card divBorder m-1"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
        <button
          className="page-link clickable card divBorder m-1"
          onClick={() => onPrevNext(1)}
          disabled={currentPage === pageCount ? true : false}
        >
          {'>'}
        </button>
      </ul>
    </nav>
  );
}

export default Pagination;
