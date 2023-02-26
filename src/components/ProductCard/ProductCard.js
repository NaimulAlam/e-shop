import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddtoCart }) => {
  const { name, img, seller, price, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button onClick={() => handleAddtoCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <ShoppingCartIcon className="h-6 w-6 text-slate-800" />
      </button>
    </div>
  );
};

export default ProductCard;
