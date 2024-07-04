import React, { useState, useEffect } from "react";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filteredResults = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults.slice(0, 3));
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-bar-container hidden md:flex">
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Haz una búsqueda en Simán"
          value={query}
          onChange={handleInputChange}
        />
        <FontAwesomeIcon icon={faMicrophone} className="mic-icon" />
      </div>
      {results.length > 0 && (
        <div className="search-results">
          {results.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-info">
                <h4 className="product-title">{product.title}</h4>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
