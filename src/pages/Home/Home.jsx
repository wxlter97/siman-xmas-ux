// NavBar.jsx

import React, { useState, useEffect } from "react";
import "./Home.scss";
import Hero from "../../assets/images/Hero.png";
import Banner1 from "../../assets/images/sections/01_berry/banner.png";
import Banner2 from "../../assets/images/sections/02_holi/banner.png";
import Banner3 from "../../assets/images/sections/03_candy/banner.png";
import Banner4 from "../../assets/images/sections/04_wonderful/banner.png";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import SectionGrid from "../../components/SectionGrid/SectionGrid";
import CategoryCarousel from "../../components/CategoryCarousel/CategoryCarousel";
import NewProducts from "../../components/NewProducts/NewProducts";

const categories = {
  collections: [
    {
      name: "Berry Christmas",
      image: require("../../assets/images/categories/collections/01.png"),
    },
    {
      name: "Candyland",
      image: require("../../assets/images/categories/collections/02.png"),
    },
    {
      name: "Christmas Valley",
      image: require("../../assets/images/categories/collections/03.png"),
    },
    {
      name: "Hello Fall",
      image: require("../../assets/images/categories/collections/04.png"),
    },
    {
      name: "Holiday Winter",
      image: require("../../assets/images/categories/collections/05.png"),
    },
    {
      name: "Magical Forest",
      image: require("../../assets/images/categories/collections/06.png"),
    },
    {
      name: "Reason of the Season",
      image: require("../../assets/images/categories/collections/07.png"),
    },
    {
      name: "Wonderful Time",
      image: require("../../assets/images/categories/collections/08.png"),
    },
  ],
  products: [
    {
      name: "Christmas Tree",
      image: require("../../assets/images/categories/products/01.png"),
    },
    {
      name: "Christmas Ornaments",
      image: require("../../assets/images/categories/products/02.png"),
    },
    {
      name: "Christmas Lights",
      image: require("../../assets/images/categories/products/03.png"),
    },
    {
      name: "Christmas Decor",
      image: require("../../assets/images/categories/products/04.png"),
    },
  ],
  colors: [
    {
      name: "Red",
      image: require("../../assets/images/categories/colors/01.png"),
    },
    {
      name: "Green",
      image: require("../../assets/images/categories/colors/02.png"),
    },
    {
      name: "Gold",
      image: require("../../assets/images/categories/colors/03.png"),
    },
    {
      name: "Silver",
      image: require("../../assets/images/categories/colors/04.png"),
    },
  ],
  fashion: [
    {
      name: "Damas",
      image: "Damas",
    },
    {
      name: "Caballeros",
      image: "Caballeros",
    },
    {
      name: "Niños",
      image: "Niños",
    },
    {
      name: "Accesorios",
      image: "Accesorios",
    },
  ],
};

function getImages(folder_name, grid) {
  const images = [];

  // Banner principal
  images.push({
    src: require(`../../assets/images/sections/` + folder_name + `/main.png`),
    col: 3,
    row: 1,
  });

  // Grid

  for (let i = 1; i <= grid.length; i++) {
    images.push({
      src: require(`../../assets/images/sections/` +
        folder_name +
        `/block_0` +
        i +
        `.png`),
      col: 1,
      row: grid[i - 1],
    });
  }

  return images;
}

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("collections");
  const [subCategories, setSubCategories] = useState(categories.collections);

  useEffect(() => {
    setSubCategories(categories[selectedCategory]);
  }, [selectedCategory]);

  return (
    <div className="hero">
      <img src={Hero} alt="Hero" className="hero-image" />
      <div className="filtros-container">
        <div className="text-hero">Compra por</div>
        <div className="chips-container">
          <div
            className={`chips-hero ${
              selectedCategory === "collections" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("collections")}
          >
            <div
              className={`text-hero ${
                selectedCategory === "collections" ? "selected-text" : ""
              }`}
            >
              Colecciones
            </div>
          </div>
          <div
            className={`chips-hero ${
              selectedCategory === "products" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("products")}
          >
            <div
              className={`text-hero ${
                selectedCategory === "products" ? "selected-text" : ""
              }`}
            >
              Productos
            </div>
          </div>
          <div
            className={`chips-hero ${
              selectedCategory === "colors" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("colors")}
          >
            <div
              className={`text-hero ${
                selectedCategory === "colors" ? "selected-text" : ""
              }`}
            >
              Colores
            </div>
          </div>
          <div
            className={`chips-hero ${
              selectedCategory === "fashion" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("fashion")}
          >
            <div
              className={`text-hero ${
                selectedCategory === "fashion" ? "selected-text" : ""
              }`}
            >
              Moda
            </div>
          </div>
        </div>
      </div>
      <div className="carousel">
        <CategoryCarousel categories={subCategories} />
      </div>
      <div className="container w-11/12 mx-auto">
        <SectionDivider img={Banner1} />
        <SectionGrid
          imgs={getImages("01_berry", [1, 2, 2, 1])}
          tags={[
            { top: "15%", left: "15%" },
            { top: "40%", left: "19%" },
            { top: "30%", left: "40%" },
            { top: "39%", left: "68%" },
            { top: "70%", left: "45%" },
            { top: "85%", left: "25%" },
          ]}
        />
        <div
          className="CopyParaNavidad"
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 30,
            fontFamily: "Abhaya Libre",
            fontWeight: "400",
            lineHeight: 5,
            letterSpacing: 0.15,
            wordWrap: "break-word",
          }}
        >
          ¡Descubre la magia de la Navidad con SIMÁN: regalos únicos,
          decoraciones encantadoras y momentos inolvidables! 🎄🎁✨
        </div>
        <SectionDivider img={Banner2} />
        <SectionGrid imgs={getImages("02_holi", [2, 1, 1, 2])} />
        <SectionDivider img={Banner3} />
        <SectionGrid imgs={getImages("03_candy", [1, 2, 1, 2])} />
        <SectionDivider img={Banner4} />
        <SectionGrid imgs={getImages("04_wonderful", [1, 1, 2, 2])} />
        <NewProducts />
      </div>
    </div>
  );
}

export default Home;
