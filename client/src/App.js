import { useState } from 'react';
import './App.css';
import FilterContainer from './components/FilterContainer/FilterContainer';
import ProductList from './components/ProdutList/ProductList';

function App() {
  const [url, setUrl] = useState('https://localhost:7165/products?');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {};

  return (
    <>
      <h1 className="heading">MVC Project</h1>
      <div className="App">
        <FilterContainer handleChange={handleChange} handleSubmit={handleSubmit} />
        <ProductList url={url} />
      </div>
    </>
  );
}

export default App;
