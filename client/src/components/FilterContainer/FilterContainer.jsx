import './filters.scss';
import React from 'react';
import FilterCategory from '../FilterCategory/FilterCategory';
import { categories, brands } from '../../utils/filters';

const FilterContainer = ({ handleChange }) => {
  return (
    <form action="" method="GET" className="filter-form">
      <h3 className="filter-form-heading">Filters</h3>
      <FilterCategory handleChange={handleChange} {...categories} />
      <FilterCategory handleChange={handleChange} {...brands} />

      <div className="filter-form-container">
        <h4>Price Range</h4>
        <div className="filter-input">
          <input type="checkbox" name="firstRange" id="firstRange" onChange={handleChange} />
          <label htmlFor="firstRange">&nbsp;0 - 1000</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="SecondRange" id="SecondRange" onChange={handleChange} />
          <label htmlFor="SecondRange">&nbsp;1000 - 2500</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="thirdRange" id="thirdRange" onChange={handleChange} />
          <label htmlFor="thirdRange">&nbsp;2500 - 5000</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="fourthRange" id="fourthRange" onChange={handleChange} />
          <label htmlFor="fourthRange">&nbsp;5000+</label>
        </div>
      </div>
    </form>
  );
};

export default FilterContainer;
