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

  useEffect(() => {
    setUrl(`https://localhost:7165/products?page=${page}`);
    fetchData(url);
  }, [url, page]);

  async function fetchData(url) {
    const response = await axios.get(url);
    const { products, total } = response.data;

    setData({ ...data, total, products });
  }

  const handleChange = (event) => {
    if (event.target.checked) console.log(event.target.name);
  };

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
