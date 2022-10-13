import React from 'react';

const FilterInput = ({ title, value, handleChange }) => {
  return (
    <div className="filter-input">
      <input type="checkbox" name={title} id={title} onChange={handleChange} value={value} />
      <label htmlFor={title}>&nbsp;{title}</label>
    </div>
  );
};

export default FilterInput;
