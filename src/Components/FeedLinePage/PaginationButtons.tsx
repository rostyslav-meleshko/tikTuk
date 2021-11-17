import React, { FC } from 'react';
import { PAGINATION_PAGES } from './FeedLinePage';

type Callback = (page: number) => void;

type PaginationButtonsProps = {
  paginationPage: number;
  handlePageChange: Callback;
}

const PaginationButtons: FC<PaginationButtonsProps> = ({ paginationPage, handlePageChange }) => {
  return (
    <div className="container-feedline__buttons">
      {PAGINATION_PAGES.map((page) => (
        <button
          type="button"
          className={page !== paginationPage
            ? "pagination-button"
            : "pagination-button pagination-button--active"}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginationButtons;