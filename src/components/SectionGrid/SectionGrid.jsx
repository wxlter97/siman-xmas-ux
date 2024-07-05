import React from "react";
import "./SectionGrid.scss";
import Tag from "../../assets/images/tag.png";
import TagRed from "../../assets/images/tag_red.png";
import { Link } from "react-router-dom";

function SectionGrid(props) {
  let grid =
    props.mobile === "true"
      ? [
          // Initial grid, 3 columns and 1 row
          <div class="col-span-3 row-span-1">Loading...</div>,
        ]
      : [
          // Initial grid, 3 columns and 2 rows
          <div class="col-span-3 row-span-1">Loading...</div>,
          <div class="col-span-1 row-span-2">Loading...</div>,
          <div class="col-span-1 row-span-1">Loading...</div>,
          <div class="col-span-1 row-span-1">Loading...</div>,
          <div class="col-span-1 row-span-1">Loading...</div>,
        ];
  grid = [];
  if (props.horizontal === "true" && props.mobile === "true") {
    grid = props.imgs.map((img, index) => {
      return (
        <img
          src={img.src}
          alt="grid-item"
          className="w-3/4 pr-4 rounded-lg"
        ></img>
      );
    });
  } else if (props.horizontal === "true" && props.mobile === "false") {
    grid = props.imgs.map((img, index) => {
      return (
        <img
          src={img.src}
          alt="grid-item"
          className="w-1/4 pr-4 rounded-lg"
        ></img>
      );
    });
  } else {
    grid = props.imgs.map((img, index) => {
      let style = `col-span-${img.col} row-span-${img.row}`;
      let tags = [];
      if (img.col === 3) {
        props.tags &&
          props.tags.forEach((element) => {
            tags.push(
              <Link to={element.link}>
                <div className="img-container">
                  <img
                    src={Tag}
                    alt="tag"
                    className="label-overlay tag hidden md:block tag-white"
                    style={{ top: element.top, left: element.left }}
                  ></img>
                  <img
                    src={TagRed}
                    alt="tag"
                    className="label-overlay tag hidden md:block tag-red"
                    style={{ top: element.top, left: element.left }}
                  ></img>
                </div>
              </Link>
            );
          });
        tags.push(
          <div
            className="label-overlay div-as-button hidden md:flex"
            style={{ top: "86%", left: "2%" }}
            onClick={() => {
              alert("Ver productos");
            }}
          >
            Ver productos
          </div>
        );
      }
      return (
        <div class={style + " relative"} key={index}>
          <img
            src={img.src}
            alt="grid-item"
            className={
              "grid-item-image rounded-lg " +
              (img.row === 1 ? " aspect-[2/1]" : " aspect-[1/1]")
            }
          ></img>
          {tags.length > 0 && tags}
        </div>
      );
    });
  }

  if (props.horizontal === "true") {
    return <div class="flex overflow-x-auto pt-4 pb-4">{grid}</div>;
  } else {
    return <div class="grid grid-cols-3 md:grid-cols-3 gap-4">{grid}</div>;
  }
}

export default SectionGrid;
