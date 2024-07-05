import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "./CategoryCarousel.scss";

// Configuración del carrusel
const getSettings = (numCategories) => ({
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: numCategories > 4,
});

function CategoryCarousel(props) {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Reinicializa el slideIndex a 0 cuando cambien los props
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [props.categories]);

  const settings = getSettings(props.categories.length);

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {props.categories.map((category, index) => (
          <div key={index} className="carousel-item">
            <div className="category-image" onClick={() => window.open(category.link, "_self")}>
              {category.image.includes("/static/media/") ? (
                <img src={category.image} alt={category.name}></img>
              ) : (
                <div className="text-carousel">{category.image}</div>
              )}
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryCarousel;
