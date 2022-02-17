import React from "react";
import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data.js";

function ProductList() {
  return (
    <div className="pList">
      <div className="pList-texts">
        <h1 className="pList-title">Lorem ipsum dolor sit amet.</h1>
        <p className="pList-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          similique tempora architecto quo blanditiis in quis dolores impedit
          repellat cum.
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
