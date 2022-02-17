import React from "react";
import "./product.css";

function Product({ img, link }) {
  return (
    <div className="product">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img className="p-img" src={`/images/${img}`} alt="" />
      </a>
    </div>
  );
}

export default Product;
