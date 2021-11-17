import React, { FC } from 'react';

const ErrorBlock: FC = () => {
  return (
    <div className="container-feedline__error">
      <span className="container-feedline__error-text">Server conncetion error. Try again later or reload page</span>
      <button
        type="button"
        className="error-button"
        onClick={() => { window.location.reload(); }}
      >
        Reload page
      </button>
    </div>
  );
};

export default ErrorBlock;