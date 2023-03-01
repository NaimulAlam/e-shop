import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const ReviewProducts = ({ product, handleRemoveProduct }) => {
  const { id, name, price, quantity, img, shipping } = product;

  return (
    <div className="card card-side bg-base-100 shadow-xl m-2 w-11/12">
      <figure className="w-60">
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Shipping: ${shipping}</p>
        <p>Quantity: {quantity}</p>
        <div className="card-actions">
          <button
            onClick={() => handleRemoveProduct(id)}
            className="btn btn-error rounded-md btn-sm hover:bg-red-700 "
          >
            Remove
            <TrashIcon className="h-6 w-6 text-white ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewProducts;
