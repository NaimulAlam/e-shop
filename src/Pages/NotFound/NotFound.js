import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import Navbar from "../../components/Shared/Navbar/Navbar";

function NotFound() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen from-gray-900 to-gray-600 bg-gradient-to-r align-middle">
        <div className="hero-overlay bg-opacity-80 p-0"></div>
        <div className="text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-md md:text-4xl font-bold">
              Page Not Found <span style={{ color: "red" }}>404</span>
            </h1>
            <p className="text-sm mb-5">
              The page you are looking for, it's not available.
            </p>
            <Link to="/">
              <button className="btn border-b-neutral-50">
                Go back to the homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
