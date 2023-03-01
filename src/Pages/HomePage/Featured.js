import React from "react";
import ProductImg from "../../Asset/images/nike-red-shoes.jpg";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <div className="container p-2 my-20">
      <h1 className="text-4xl my-10">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-col md:grid-rows-none grid-rows-2 gap-5 place-items-center">
        <div className="card w-40 lg:w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>

            <div className="card-actions justify-center">
              <Link to="/shop">
                <button className="btn btn-warning w-full">Explore</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-40 lg:w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>

            <div className="card-actions justify-center">
              <Link to="/shop">
                <button className="btn btn-warning w-full">Explore</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-40 lg:w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>

            <div className="card-actions justify-center">
              <Link to="/shop">
                <button className="btn btn-warning w-full">Explore</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-40 lg:w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>

            <div className="card-actions justify-center">
              <Link to="/shop">
                <button className="btn btn-warning w-full">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
