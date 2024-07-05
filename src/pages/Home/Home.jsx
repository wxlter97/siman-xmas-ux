// NavBar.jsx

import React, { useState, useEffect } from "react";
import "./Home.scss";
import Hero from "../../assets/images/Hero.png";
import HeroMobile from "../../assets/images/mobile/Hero.jpg";
import Banner1 from "../../assets/images/sections/01_berry/banner.png";
import Banner1Mobile from "../../assets/images/mobile/B1/B1-banner.png";
import Banner2 from "../../assets/images/sections/02_holi/banner.png";
import Banner2Mobile from "../../assets/images/mobile/B2/B2-Banner.png";
import Banner3 from "../../assets/images/sections/03_candy/banner.png";
import Banner3Mobile from "../../assets/images/mobile/B3/B3-Banner.png";
import Banner4 from "../../assets/images/sections/04_wonderful/banner.png";
import Banner4Mobile from "../../assets/images/mobile/B4/B4-Banner.png";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import SectionGrid from "../../components/SectionGrid/SectionGrid";
import CategoryCarousel from "../../components/CategoryCarousel/CategoryCarousel";
import NewProducts from "../../components/NewProducts/NewProducts";

const categories = {
  collections: [
    {
      name: "Berry Christmas",
      image: require("../../assets/images/categories/collections/01.png"),
      link: "collections/berry",
    },
    {
      name: "Candyland",
      image: require("../../assets/images/categories/collections/02.png"),
      link: "collections/candyland",
    },
    {
      name: "Christmas Valley",
      image: require("../../assets/images/categories/collections/03.png"),
      link: "collections/christmas-valley",
    },
    {
      name: "Hello Fall",
      image: require("../../assets/images/categories/collections/04.png"),
      link: "collections/hello-fall",
    },
    {
      name: "Holiday Winter",
      image: require("../../assets/images/categories/collections/05.png"),
      link: "collections/holiday-winter",
    },
    {
      name: "Magical Forest",
      image: require("../../assets/images/categories/collections/06.png"),
      link: "collections/magical-forest",
    },
    {
      name: "Reason of the Season",
      image: require("../../assets/images/categories/collections/07.png"),
      link: "collections/reason-of-the-season",
    },
    {
      name: "Wonderful Time",
      image: require("../../assets/images/categories/collections/08.png"),
      link: "collections/wonderful-time",
    },
  ],
  products: [
    {
      name: "Árboles, guirnaldas...",
      image: require("../../assets/images/categories/products/01.png"),
      link: "products/christmas-tree",
    },
    {
      name: "Nacimientos",
      image: require("../../assets/images/categories/products/02.png"),
      link: "products/christmas-ornaments",
    },
    {
      name: "Luces",
      image: require("../../assets/images/categories/products/03.png"),
      link: "products/christmas-lights",
    },
    {
      name: "Adornos",
      image: require("../../assets/images/categories/products/04.png"),
      link: "products/christmas-decor",
    },
    {
      name: "Adornos de mesa",
      image: require("../../assets/images/categories/products/05.png"),
      link: "products/christmas-gifts",
    },
    {
      name: "Textiles navideños",
      image: require("../../assets/images/categories/products/06.png"),
      link: "products/christmas-table",
    },
    {
      name: "Cocina navideña",
      image: require("../../assets/images/categories/products/07.png"),
      link: "products/christmas-stationery",
    },
    {
      name: "Vajillas y piezas de servir",
      image: require("../../assets/images/categories/products/08.png"),
      link: "products/christmas-tree",
    },
  ],
  colors: [
    {
      name: "Dorado",
      image: require("../../assets/images/categories/colors/01.png"),
      link: "colors/dorado",
    },
    {
      name: "Rojo oscuro",
      image: require("../../assets/images/categories/colors/02.png"),
      link: "colors/rojo-oscuro",
    },
    {
      name: "Rojo",
      image: require("../../assets/images/categories/colors/03.png"),
      link: "colors/rojo",
    },
    {
      name: "Verde",
      image: require("../../assets/images/categories/colors/04.png"),
      link: "colors/verde",
    },
  ],
  fashion: [
    {
      name: "Damas",
      image: "Damas",
      link: "fashion/damas",
    },
    {
      name: "Caballeros",
      image: "Caballeros",
      link: "fashion/caballeros",
    },
    {
      name: "Niños",
      image: "Niños",
      link: "fashion/niños",
    },
    {
      name: "Accesorios",
      image: "Accesorios",
      link: "fashion/accesorios",
    },
  ],
};

function getImages(folder_name, grid) {
  const images = [];

  // Banner principal
  images.push({
    src: require(`../../assets/images/` + folder_name + `/main.png`),
    col: 3,
    row: 1,
  });

  // Grid

  for (let i = 1; i <= grid.length; i++) {
    images.push({
      src: require(`../../assets/images/` +
        folder_name +
        `/block_0` +
        i +
        `.png`),
      col: folder_name.includes("mobile") ? 3 : 1,
      row: grid[i - 1],
    });
  }

  return images;
}

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    setSubCategories(categories[selectedCategory]);
  }, [selectedCategory]);

  return (
    <div className="hero">
      <img src={Hero} alt="Hero" className="object-cover h-64 hidden md:flex" />
      <img src={HeroMobile} alt="Hero" className="h-full md:hidden" />
      <div className="filtros-container hidden md:inline-flex">
        <div className="text-hero">Compra por</div>
        <div className="chips-container">
          <div
            className={`chips-hero ${
              selectedCategory === "collections" ? "selected" : ""
            }`}
            onClick={() =>
              selectedCategory === "collections"
                ? setSelectedCategory("")
                : setSelectedCategory("collections")
            }
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
            onClick={() =>
              selectedCategory === "products"
                ? setSelectedCategory("")
                : setSelectedCategory("products")
            }
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
            onClick={() =>
              selectedCategory === "colors"
                ? setSelectedCategory("")
                : setSelectedCategory("colors")
            }
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
            onClick={() =>
              selectedCategory === "fashion"
                ? setSelectedCategory("")
                : setSelectedCategory("fashion")
            }
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
      <div className="carousel hidden md:flex">
        <CategoryCarousel categories={subCategories} />
      </div>
      <div className="mx-auto hidden md:block md:w-9/12 lg:w-3/4">
        <SectionDivider img={Banner1} />
        <SectionGrid
          imgs={getImages("sections/01_berry", [1, 2, 2, 1])}
          tags={[
            { top: "15%", left: "15%", link: "berry" },
            { top: "40%", left: "19%", link: "berry" },
            { top: "30%", left: "40%", link: "berry" },
            { top: "39%", left: "68%", link: "berry" },
            { top: "70%", left: "45%", link: "berry" },
            { top: "85%", left: "25%", link: "berry" },
          ]}
          imgs_labels={["Árbol y Guirnaldas", "Villas", "Esferas", "Luces"]}
        />
        <SectionGrid
          imgs={getImages("mobile/B5", [3, 3, 3])}
          horizontal="true"
          mobile="false"
        />
        <div className="copy-navidad">
          ¡Descubre la magia de la Navidad con SIMÁN! 🎄🎁✨
        </div>
        <SectionDivider img={Banner2} />
        <SectionGrid
          imgs={getImages("sections/02_holi", [2, 1, 2, 1])}
          imgs_labels={[
            "Ádornos navideños",
            "Nacimientos",
            "Árboles navideños",
            "Decoración",
          ]}
        />
        <SectionDivider img={Banner3} />
        <SectionGrid
          imgs={getImages("sections/03_candy", [2, 2, 1, 1])}
          imgs_labels={["Cojines", "Adornos", "Luces", ""]}
        />
        <SectionDivider img={Banner4} />
        <SectionGrid
          imgs={getImages("sections/04_wonderful", [1, 2, 2, 1])}
          imgs_labels={["Cojines", "Luces", "Árboles navideños", "Adornos"]}
        />
        <NewProducts />
      </div>
      <div className="w-11/12 mx-auto md:hidden">
        <SectionDivider img={Banner1Mobile} />
        <SectionGrid imgs={getImages("mobile/B1", [3, 3, 3, 3])} />
        <div className="copy-navidad">
          ¡Descubre la magia de la Navidad con SIMÁN! 🎄🎁✨
        </div>
        <SectionGrid
          imgs={getImages("mobile/B5", [3, 3, 3])}
          horizontal="true"
          mobile="true"
        />
        <SectionDivider img={Banner2Mobile} />
        <SectionGrid imgs={getImages("mobile/B2", [3, 3, 3, 3])} />
        <SectionDivider img={Banner3Mobile} />
        <SectionGrid imgs={getImages("mobile/B3", [3, 3, 3, 3])} />
        <SectionDivider img={Banner4Mobile} />
        <SectionGrid imgs={getImages("mobile/B4", [3, 3, 3, 3])} />
        <NewProducts />
      </div>
    </div>
  );
}

export default Home;
