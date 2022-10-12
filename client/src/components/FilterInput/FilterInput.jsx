import React from 'react';

const FilterInput = ({ title, handleChange }) => {
  return (
    <div className="filter-input">
      <input type="checkbox" name={title} id={title} onChange={handleChange} />
      <label htmlFor="apple">&nbsp;{title}</label>
    </div>
  );
};

export default FilterInput;
