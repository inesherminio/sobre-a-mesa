import React from "react";
import "./EachProduct.css";

function EachProduct({ product: { image, name } }) {
  return (
    <div className="product-container">
      <img src={image} alt={name} className="product-image" />
      <p className="product-name">{name.toUpperCase()}</p>
    </div>
  );
}

export default EachProduct;
