import React from 'react';
import FilterInput from '../FilterInput/FilterInput';

const FilterCategory = ({ handleChange, title, values }) => {
  return (
    <div className="filter-form-container">
      <h4>{title}</h4>
      {values.map((obj) => (
        <FilterInput key={obj.id} handleChange={handleChange} {...obj} />
      ))}
    </div>
  );
};

export default FilterCategory;
