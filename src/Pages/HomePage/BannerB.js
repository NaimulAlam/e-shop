import React from "react";
import BannerBBg from "../../Asset/images/soundcoreHP.jpg";

function BannerB() {
  return (
    <div className="m-2 p-2 md:m-10 md:p-10">
      <div
        className="hero h-[32rem] rounded-2xl"
        style={{
          backgroundImage: `url(${BannerBBg})`,
        }}
      >
        <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Simple Productivity</h1>
            <p className="mb-5">
              Make your desk beautiful and organized. Post a picture to social
              media and watch it get more likes than life-changing
              announcements. Reflect on the shallow nature of existence. At
              least you have a really nice desk setup.
            </p>
            <button className="btn btn-outline btn-primary btn-wide">
              Shop Focus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerB;
