import React from "react";
import "./SectionGrid.scss";
import Tag from "../../assets/images/tag.png";

function SectionGrid(props) {
  const grid = props.imgs.map((img, index) => {
    let style = `col-span-${img.col} row-span-${img.row}`;
    let tags = [];
    if (img.col === 3) {
      props.tags &&
        props.tags.forEach((element) => {
          tags.push(
            <img
              src={Tag}
              alt="tag"
              className="label-overlay hidden md:block"
              style={{ top: element.top, left: element.left }}
            />
          );
        });
      tags.push(
        <div
          className="label-overlay div-as-button hidden md:flex"
          style={{ top: "87%", left: "2%" }}
        >
          Ver productos
        </div>
      );
    }
    return (
      <div class={style + " relative"} key={index}>
        <img src={img.src} alt="grid-item" className="grid-item-image" />
        {tags}
      </div>
    );
  });

  return (
      <div class="grid grid-cols-3 gap-4">
        {grid}
      </div>
  );
}

export default SectionGrid;
