import React from "react";
import "./SectionDivider.scss";

function SectionDivider(props) {
  return (
    <div className="section-divider">
      <img src={props.img} alt="section-divider" className="section-divider-image" />
    </div>
  );
}

export default SectionDivider;
