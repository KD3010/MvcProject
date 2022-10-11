import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './productlist.scss';
import axios from 'axios';

const ProductList = ({ url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      const fetchedData = response.data;

      setData(() => fetchedData);
    }

    if (data.length === 0) fetchData();
  });

  console.log(data);

  return (
    <div className="product-container">
      {data.map((obj) => (
        <ProductCard key={obj.ProductId} {...obj} />
      ))}
    </div>
  );
};

export default ProductList;
