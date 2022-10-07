import './filters.scss';
import React from 'react';

const FilterContainer = ({ handleChange, handleSubmit }) => {
  return (
    <form action="" method="GET" className="filter-form" onSubmit={handleSubmit}>
      <h3 className="filter-form-heading">Filters</h3>
      <div className="filter-form-container">
        <h4>Brand</h4>
        <div className="filter-input">
          <input type="checkbox" name="apple" id="apple" onChange={handleChange} />
          <label htmlFor="apple">&nbsp;Apple</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="samsung" id="samsung" onChange={handleChange} />
          <label htmlFor="samsung">&nbsp;Samsung</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="huawie" id="huawie" onChange={handleChange} />
          <label htmlFor="huawie">&nbsp;Huawie</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="oppo" id="oppo" onChange={handleChange} />
          <label htmlFor="oppo">&nbsp;Oppo</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="microsoft" id="microsoft" onChange={handleChange} />
          <label htmlFor="microsoft">&nbsp;Microsoft</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="infinix" id="infinix" onChange={handleChange} />
          <label htmlFor="infinix">&nbsp;Infinix</label>
        </div>
      </div>

      <div className="filter-form-container">
        <h4>Category</h4>
        <div className="filter-input">
          <input type="checkbox" name="laptops" id="laptops" />
          <label htmlFor="laptops">&nbsp;Laptops</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="smartphones" id="smartphones" />
          <label htmlFor="smartphones">&nbsp;Smartphones</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="fragrances" id="fragrances" />
          <label htmlFor="fragrances">&nbsp;Fragrances</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="skincare" id="skincare" />
          <label htmlFor="skincare">&nbsp;Skincare</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="groceries" id="groceries" />
          <label htmlFor="groceries">&nbsp;Groceries</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="home-decoration" id="home-decoration" />
          <label htmlFor="home-decoration">&nbsp;Home Decoration</label>
        </div>
      </div>

      <div className="filter-form-container">
        <h4>Price Range</h4>
        <div className="filter-input">
          <input type="checkbox" name="firstRange" id="firstRange" />
          <label htmlFor="firstRange">&nbsp;0 - 1000</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="SecondRange" id="SecondRange" />
          <label htmlFor="SecondRange">&nbsp;1000 - 2500</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="thirdRange" id="thirdRange" />
          <label htmlFor="thirdRange">&nbsp;2500 - 5000</label>
        </div>
        <div className="filter-input">
          <input type="checkbox" name="fourthRange" id="fourthRange" />
          <label htmlFor="fourthRange">&nbsp;5000+</label>
        </div>
      </div>

      <button type="submit" className="filter-form-btn">
        Apply
      </button>
    </form>
  );
};

export default FilterContainer;
