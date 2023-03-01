import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddtoCart }) => {
  const { name, img, seller, price, ratings } = product;

  return (
    <div className="card bg-base-100 shadow-xl m-2 w-11/12">
      <figure className="p-2">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body p-1 gap-0 items-center text-center">
        <h2 className="card-title text-sm">{name}</h2>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <div className="flex p-2 items-center">
          <small>Ratings: {ratings}</small>
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              // checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div className="card-actions w-11/12">
          <button
            className="btn btn-primary w-full"
            onClick={() => handleAddtoCart(product)}
          >
            <span className="btn-text text-xs hidden md:block">
              Add to Cart
            </span>
            <span>
              <ShoppingCartIcon className="h-4 w-4 text-slate-800" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
