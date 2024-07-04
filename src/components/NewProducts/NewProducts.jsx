import React, { useEffect, useRef, useState } from "react";
import "./NewProducts.scss";
import Slider from "react-slick";

// Configuración del carrusel
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function NewProducts(props) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const sliderRef = useRef(null);

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
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
      </Slider>
    </div>
  );
}

export default NewProducts;
