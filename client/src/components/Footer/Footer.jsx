import './footer.styles.scss';
import React from 'react';

const Footer = ({ handleClick }) => {
  return (
    <div className="footer">
      <button onClick={handleClick} name="prevPage">
        {'<<'} Previous Page
      </button>
      <button onClick={handleClick} name="nextPage">
        Next Page {'>>'}
      </button>
    </div>
  );
};

export default Footer;
