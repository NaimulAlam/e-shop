import React from "react";
import ProductImg from "../../Asset/images/nike-red-shoes.jpg";

function Featured() {
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-4xl my-10">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-col md:grid-rows-none grid-rows-2 gap-5 place-items-center">
        <div className="card w-40 lg:w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>

            <div className="card-actions justify-center">
              <button className="btn btn-warning w-full">Explore</button>
            </div>
          </div>
        </div>
        <div className="card md:w-44 lg:w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>

            <div className="card-actions justify-center">
              <button className="btn btn-warning w-full">Explore</button>
            </div>
          </div>
        </div>
        <div className="card md:w-44 lg:w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>

            <div className="card-actions justify-center">
              <button className="btn btn-warning w-full">Explore</button>
            </div>
          </div>
        </div>
        <div className="card md:w-44 lg:w-60 bg-base-100 shadow-xl">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>

            <div className="card-actions justify-center">
              <button className="btn btn-warning w-full">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
