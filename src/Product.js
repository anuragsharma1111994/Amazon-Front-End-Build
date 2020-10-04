import React from "react";
import "./Product.css";

function Product({title, image, price}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="logo" />
      <button>Add To cart</button>
    </div>
  );
}

export default Product;
