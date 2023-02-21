import React from "react";
import ProductImg from "../../Asset/images/Nike-brown-shoes.jpg";

function CollectionMain() {
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-4xl my-10">Featured Products</h1>
      <div className="grid grid-rows-1 grid-flow-row lg:grid-cols-3 lg:grid-flow-col gap-5 gap-y-20 place-items-center lg:h-[450px]">
        <div className="card w-96 lg:w-72 xl:w-96 bg-base-100 shadow-xl h-full">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New Collection has arrived!</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              dolorem laborum omnis quam ipsa harum aspernatur!
            </p>
          </div>
        </div>
        <div className="card w-96 lg:w-72 xl:w-96 bg-base-100 shadow-xl h-full">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New Collection has arrived!</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              dolorem laborum omnis quam ipsa harum aspernatur!
            </p>
          </div>
        </div>
        <div className="card w-96 lg:w-72 xl:w-96 bg-base-100 shadow-xl h-full">
          <figure>
            <img src={ProductImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New Collection has arrived!</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              dolorem laborum omnis quam ipsa harum aspernatur!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionMain;
