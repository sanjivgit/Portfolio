import React from "react";
import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data.js";

function ProductList() {
  return (
    <div className="pList">
      <div className="pList-texts">
        <h1 className="pList-title">Projects</h1>
        <p className="pList-desc">
          These are the following self made projects made by me till now . I
          worked and learned several WEB TECHNOLOGIES during making of these
          Projects .
        </p>
      </div>
      <div className="pList-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
