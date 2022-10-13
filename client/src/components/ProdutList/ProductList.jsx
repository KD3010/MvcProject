import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './productlist.scss';

const ProductList = ({ data }) => {
  return (
    <div className="product-container">
      {data.map((obj, ind) => (
        <ProductCard key={ind} {...obj} />
      ))}
    </div>
  );
};

export default ProductList;
