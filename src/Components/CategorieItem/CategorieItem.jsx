import "./CategorieItem.css";
import React, { useState } from "react";

const CategorieItem = ({ item }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };
  return (
    <div className="CategorieItem">
      <div className="CategorieItemImageContainer">
        <img
          src={item.img}
          alt=""
          className={`zoomable-image ${isZoomed ? "zoomed" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="CategorieItemTextContainer">
        <div className="CategorieItemTitle">{item.title}</div>
        <button className="CategorieItemButton">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategorieItem;
