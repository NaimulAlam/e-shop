import React from "react";
import HeroMainBg from "../../Asset/images/AppleHP.jpg";
import { Link } from "react-router-dom";

function HeroMain() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroMainBg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Looking for New Gadgets?</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/shop">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroMain;
