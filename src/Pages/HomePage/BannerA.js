import React from "react";
import BannerABg from "../../Asset/images/desk.jpg";
import { Link } from "react-router-dom";

function BannerA() {
  return (
    <div className="m-2 p-2 md:m-10 md:p-10">
      <div
        className="hero h-[32rem] rounded-2xl"
        style={{
          backgroundImage: `url(${BannerABg})`,
        }}
      >
        <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Level up your desk</h1>
            <p className="mb-5">
              Make your desk beautiful and organized. Post a picture to social
              media and watch it get more likes than life-changing
              announcements. Reflect on the shallow nature of existence. At
              least you have a really nice desk setup.
            </p>
            <Link to="/shop">
              <button className="btn btn-outline btn-primary btn-wide">
                Shop Workspace
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerA;
