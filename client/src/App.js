import { useEffect, useState } from 'react';
import './App.css';
import FilterContainer from './components/FilterContainer/FilterContainer';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProdutList/ProductList';
import axios from 'axios';

function App() {
  const [data, setData] = useState({
    total: 0,
    limit: 9,
    page: 1,
    products: [],
  });
  const { page, total, limit, products } = data;

  const [url, setUrl] = useState(`https://localhost:7165/products?page=${page}`);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    const brandQuery = brand.length > 0 ? brand.join(',') : '';
    const categoryQuery = category.length > 0 ? category.join(',') : '';

    setUrl(
      `https://localhost:7165/products?page=${page}&brand=${brandQuery}&category=${categoryQuery}`
    );
    fetchData(url);
  }, [url, page, brand, category]);

  // Fetches the data from API and stores in the state
  async function fetchData(url) {
    const response = await axios.get(url);
    const { products, total } = response.data;

    setData({ ...data, total, products });
  }

  // Handles the filter checkbox changes to return filtered data
  const handleChange = (event) => {
    if (event.target.checked) {
      const arr = event.target.value.split(' ');
      if (arr[0] === 'brand') setBrand([...brand, arr[1]]);
      if (arr[0] === 'category') setCategory([...category, arr[1]]);
    } else {
      const arr = event.target.value.split(' ');
      if (arr[0] === 'brand') setBrand((prevState) => prevState.filter((obj) => obj !== arr[1]));
      if (arr[0] === 'category')
        setCategory((prevState) => prevState.filter((obj) => obj !== arr[1]));
    }
  };

  // Handles when clicked on pagination buttons
  const handleClick = (event) => {
    event.preventDefault();

    if (event.target.name === 'nextPage' && page * limit < total) {
      setData({ ...data, page: page + 1 });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (event.target.name === 'prevPage' && page > 1) {
      setData({ ...data, page: page - 1 });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <h1 className="heading">MVC Project</h1>
      <div className="App">
        <div className="App-container">
          <FilterContainer handleChange={handleChange} />
          <ProductList data={products} />
        </div>
        <Footer handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
