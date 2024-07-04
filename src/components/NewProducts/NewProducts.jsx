import React, { useEffect, useRef, useState } from "react";
import "./NewProducts.scss";
import Slider from "react-slick";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CuotasCredit from "../../assets/images/cuotas_cc.png";
import CuotasSiman from "../../assets/images/cuotas_siman.png";

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
    <div className="carousel-container-new">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card-new h-1/3">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info h-3/8">
              <h4 className="product-title">{product.title}</h4>
              <p className="product-rate float-right">
                <FontAwesomeIcon icon={faStar} className="star" />
                {product.rating.rate} ({product.rating.count})
              </p>
              <p className="product-seller">Vendido por: SIMAN</p>
              <p className="product-price">${product.price}</p>
              <p className="product-original-price line-through">${(product.price*(Math.random()*0.5+1)).toFixed(2)}</p>
              <p className="product-cuotas">
                {product.price > 100 ? (
                  <img
                    src={CuotasCredit}
                    alt="Cuotas con tarjeta de crédito"
                    className="w-full"
                  />
                ) : (
                  <img
                    src={CuotasSiman}
                    alt="Cuotas con tarjeta SIMAN"
                    className="w-3/4"
                  />
                )}
              </p>
            </div>
            <div className="product-info h-1/3">
              <button className="product-button-new">Agregar al carrito</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NewProducts;
