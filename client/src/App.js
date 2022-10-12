import { useEffect, useState } from 'react';
import './App.css';
import FilterContainer from './components/FilterContainer/FilterContainer';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProdutList/ProductList';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState(`https://localhost:7165/products?`);

  const handleChange = (event) => {
    if (event.target.checked) console.log(event.target.name);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (currentPage !== 1 && event.target.name === 'prevPage')
      setCurrentPage((prevState) => prevState - 1);

    if (currentPage !== 4 && event.target.name === 'nextPage')
      setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <>
      <h1 className="heading">MVC Project</h1>
      <div className="App">
        <div className="App-container">
          <FilterContainer handleChange={handleChange} />
          <ProductList url={url} />
        </div>
        <Footer handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
