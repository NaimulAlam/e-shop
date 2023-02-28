import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PriveteRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <button className="btn loading">loading. . .</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PriveteRoute;
